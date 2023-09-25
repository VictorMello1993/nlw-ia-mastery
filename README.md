# Projeto
A aplicação desenvolvida se trata de um automatizador de upload de vídeos no YouTube. O objetivo é encarregar a Inteligência Artificial de gerar conteúdos em texto sugerindo títulos e descrições de um vídeo a ser enviado no YouTube, otimizando o trabalho do produtor. 

![image](https://github.com/VictorMello1993/nlw-ia-mastery/assets/35710766/0d76d3e9-6ca1-41a9-86ba-1db515b48304)





# Funcionamento
- Para cumprir o objetivo proposto, primeiramente o usuário seleciona um vídeo salvo no seu computador. Uma vez selecionado, o sistema irá converter o arquivo de vídeo para o arquivo de áudio no formato .mp3. O formato de vídeo selecionado deverá ser .mp4.
  
- Após a conversão do vídeo para áudio, o sistema irá realizar a transcrição do áudio em texto para que a IA consiga sugerir descrições e/ou títulos do vídeo de maneira precisa.

# Tecnologias utilizadas
- Reactjs
- Nodejs
- Typescript
- OpenAI
- Prisma DB
- Tailwind CSS
- Fastify
- Zod

# Início rápido
1.  Clone o seu repositório 
```
git clone https://github.com/VictorMello1993/nlw-ia-mastery.git
```

2. Instale as dependências do projeto
```
npm install
```

3. Execute o seed para registrar os prompts padrão para geração de títulos e descrições para envio do vídeo do YouTube
```
npx prisma db seed
```

4. Execute o projeto
```
npm run dev
```

# Endpoints para importar
[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=NLW%20IA%20Mastery&uri=https%3A%2F%2Fgist.githubusercontent.com%2FVictorMello1993%2F7bcbe0b304929792e5f995e8da0900cd%2Fraw%2F5b8aac1937ff37ecf55b53e8dd7e897925ac87e6%2FInsomnia_2023-09-24.json)


[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/14680146-7d985ba3-7a04-4bd2-9368-cd4019a8ab27?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D14680146-7d985ba3-7a04-4bd2-9368-cd4019a8ab27%26entityType%3Dcollection%26workspaceId%3D08f9f37b-6d23-473a-8290-857c03b08b5c#?env%5BNew%20Environment%5D=W3sia2V5IjoiYmFzZVVybCIsInZhbHVlIjoiaHR0cDovL2xvY2FsaG9zdDozMzMzIiwiZW5hYmxlZCI6dHJ1ZSwidHlwZSI6ImRlZmF1bHQifV0=)
