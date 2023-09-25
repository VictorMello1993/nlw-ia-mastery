# Project
The developed application is an automator for uploading videos to YouTube. The goal is to leverage Artificial Intelligence to generate text content suggesting titles and descriptions for a video to be uploaded on YouTube, thereby optimizing the producer's work.

![image](https://github.com/VictorMello1993/nlw-ia-mastery/assets/35710766/0d76d3e9-6ca1-41a9-86ba-1db515b48304)

# Operation
- To fulfill the proposed objective, the user first selects a video saved on their computer. Once selected, the system will convert the video file to an audio file in .mp3 format. The selected video format should be .mp4.

- After converting the video to audio, the system will transcribe the audio into text so that the AI can suggest video descriptions and/or titles accurately.

# Features and tools
- Reactjs
- Nodejs
- Typescript
- OpenAI
- Prisma DB
- Tailwind CSS
- Fastify
- Zod

# Getting started
1.  Clone your repository
```
git clone https://github.com/VictorMello1993/nlw-ia-mastery.git
```

2. Install all of the dependencies
```
npm install
```

3. Run the seed to register the default prompts for generating titles and descriptions for YouTube video submission
```
npx prisma db seed
```

4. Execute the project
```
npm run dev
```

# Endpoints to import
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW%20IA%20Mastery&uri=https%3A%2F%2Fgist.githubusercontent.com%2FVictorMello1993%2F7bcbe0b304929792e5f995e8da0900cd%2Fraw%2F5b8aac1937ff37ecf55b53e8dd7e897925ac87e6%2FInsomnia_2023-09-24.json)


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14680146-7d985ba3-7a04-4bd2-9368-cd4019a8ab27?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D14680146-7d985ba3-7a04-4bd2-9368-cd4019a8ab27%26entityType%3Dcollection%26workspaceId%3D08f9f37b-6d23-473a-8290-857c03b08b5c#?env%5BNew%20Environment%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDozMzMzIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)


# Versions of README
<img src="https://user-images.githubusercontent.com/35710766/123499283-02365980-d60c-11eb-8731-9e9f42d300f0.png" alt="Bandeira do Brasil" width="22px"/> <a href="/README-EN.md">English</a> | <img src="https://user-images.githubusercontent.com/35710766/123499278-ffd3ff80-d60b-11eb-85d5-156558ade93a.jpg" alt="Bandeira dos Estados Unidos" width="22px"/> <a href="/README.md">Portuguese</a>
