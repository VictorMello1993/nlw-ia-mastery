import fastify from "fastify";
import { GetAllPromptsRoute } from "./routes/get-all-prompts";
import { UploadVideoRoute } from "./routes/upload-video";
import { CreateTranscriptionRoute } from "./routes/create-transcription";
import { GenerateAICompletionRoute } from "./routes/generate-ai-completion";
import fastifyCors from "@fastify/cors";

const app = fastify();

app.register(fastifyCors, {
	origin: "*"
});

app.register(GetAllPromptsRoute);
app.register(UploadVideoRoute);
app.register(CreateTranscriptionRoute);
app.register(GenerateAICompletionRoute);

app.listen({port: 3333})
	 .then(() => console.log("Server is running..."));