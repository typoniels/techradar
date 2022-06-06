FROM node:16 AS builder

WORKDIR /app
COPY . .
RUN rm -rf .cache node_modules
RUN yarn install && yarn build
RUN rm -rf node_modules .cache

FROM nginx:alpine

WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/public .

ENTRYPOINT ["nginx", "-g", "daemon off;"]