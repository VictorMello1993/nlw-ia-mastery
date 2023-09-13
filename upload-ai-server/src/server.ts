import fastify from "fastify";
import { prisma } from "./lib/prisma";

const app = fastify();

// Health check
app.get("/", () => {
	return "hello world!";
});

app.get("/prompts", async () => {
	const prompts = await prisma.prompt.findMany();

	return prompts;
});

app.listen({port: 3333})
	 .then(() => console.log("Server is running..."));