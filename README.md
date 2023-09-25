# Projeto
A aplicação desenvolvida se trata de um automatizador de upload de vídeos no YouTube. O objetivo é encarregar a Inteligência Artificial de gerar conteúdos em texto sugerindo títulos e descrições de um vídeo a ser enviado no YouTube, otimizando o trabalho do produtor. 

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


