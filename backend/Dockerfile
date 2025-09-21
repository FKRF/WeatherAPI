# Imagem base com Node.js
FROM node:18

# Diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala dependências
RUN npm install

# Copia o resto do código
COPY . .

# Expõe a porta usada pelo backend
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "query-hgweather.js"]
