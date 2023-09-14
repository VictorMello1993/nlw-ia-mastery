import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../lib/prisma";
import {fastifyMultipart} from "@fastify/multipart";
import { randomUUID } from "node:crypto";
import path from "node:path";
import fs from "node:fs";
import {promisify} from "node:util";
import {pipeline} from "node:stream";

const pump = promisify(pipeline);

export async function UploadVideoRoute(app: FastifyInstance){
	app.register(fastifyMultipart, {
		limits: {
			fileSize: 1_048_576 * 25 //25MB
		}
	});

	app.post("/videos", async (req: FastifyRequest, res: FastifyReply) => {
		const data = await req.file();

		console.log(data);

		if(!data){
			return res.status(400).send({error: "Missing file input."});
		}

		const fileExtension = path.extname(data.filename);

		if(fileExtension !== ".mp3"){
			return res.status(400).send({error: "Invalid input type, please upload a MP3"});
		}

		//Salvando arquivo em disco
		const fileBaseName = path.basename(data.filename, fileExtension);
		const fileUploadName = `${fileBaseName}-${randomUUID()}${fileExtension}`;
		const uploadDestination = path.resolve(__dirname, "../../tmp", fileUploadName);

		/*Realizando upload do arquivo, salvando arquivo diretamente no disco de tempos em tempos para evitar
      de ter que esperar todo o processo de upload finalizar. Ou seja, para evitar de salvar os dados 
      do arquivo diretamente na memória até o upload finalizar.*/
		await pump(data.file, fs.createWriteStream(uploadDestination));

		const video = await prisma.video.create({
			data: {
				name: data.filename,
				path: uploadDestination
			}
		});

		return {
			video
		};
	});
}