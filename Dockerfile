# Этап сборки
FROM node:18-alpine AS builder
WORKDIR /app

RUN apk add --no-cache curl ca-certificates

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Этап продакшена
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV TRUST_PROXY=true

# 👉 Добавим ca-certificates
RUN apk add --no-cache curl ca-certificates

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]