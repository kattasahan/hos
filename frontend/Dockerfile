# Stage 1 - Building App from TS to JS
FROM node:20-alpine as BUILD_IMAGE

WORKDIR /app/react-app

COPY package* .

RUN npm install

COPY . .

RUN npm run build

# Stage 2 - Exposing only /dist
FROM node:20-alpine as PRODUCTION_IMAGE
WORKDIR /app/react-app

COPY --from=BUILD_IMAGE /app/react-app/dist/ /app/react-app/dist/

COPY package* .
COPY vite.config.ts .

RUN npm install typescript

EXPOSE 8080
CMD ["npm","run","preview"]