import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import {streamToResponse, OpenAIStream} from "ai";
import { prisma } from "../lib/prisma";
import { openai } from "../lib/openai";

export async function GenerateAICompletionRoute(app: FastifyInstance){
	app.post("/ai/complete", async (request: FastifyRequest, response: FastifyReply) => {
		const bodySchema = z.object({
			videoId: z.string().uuid(),
			prompt: z.string(),
			temperature: z.number().min(0).max(1).default(0.5),
		});

		const {videoId, prompt, temperature} = bodySchema.parse(request.body);

		const video = await prisma.video.findUniqueOrThrow({
			where: {
				id: videoId,
			}
		});

		if(!video.transcription) {
			return response.status(400).send({error: "Video transcription was not generated yet."});
		}

		const promptMessage = prompt.replace("{transcription}", video.transcription);
    
		const responseFinal = await openai.chat.completions.create({
			model: "gpt-3.5-turbo",
			temperature,
			messages: [
				{role: "user", content: promptMessage}
			],
			stream: true
		});

		/*Habilitando a geração do conteúdo de maneira assíncrona, de forma a evitar que o back-end
		 aguarde todo o processo de geração de conteúdo para que seja enviado para o front-end*/
		const stream = OpenAIStream(responseFinal);

		streamToResponse(stream, response.raw, {
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS"
			}
		});
	});
}