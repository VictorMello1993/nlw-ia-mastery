import fastify from "fastify";
import { GetAllPromptsRoute } from "./routes/get-all-prompts";
import { UploadVideoRoute } from "./routes/upload-video";
import { CreateTranscriptionRoute } from "./routes/create-transcription";

const app = fastify();

app.register(GetAllPromptsRoute);
app.register(UploadVideoRoute);
app.register(CreateTranscriptionRoute);

app.listen({port: 3333})
	 .then(() => console.log("Server is running..."));