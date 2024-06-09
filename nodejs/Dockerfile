FROM node:latest
WORKDIR /app

COPY . .
RUN npm i

ENTRYPOINT ["npm", "run", "prod"]