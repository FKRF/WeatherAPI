# Usa uma imagem leve do Nginx
FROM nginx:alpine

# Remove configuração padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia os arquivos do frontend para o nginx
COPY . /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# O Nginx já inicia automaticamente com a imagem
