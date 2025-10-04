# todo-api-express-ts/Dockerfile  (Debian + OpenSSL 3)
FROM node:20-bookworm-slim

WORKDIR /app

RUN apt-get update \
 && apt-get install -y --no-install-recommends openssl ca-certificates \
 && rm -rf /var/lib/apt/lists/*

# ใช้ npm install เพราะไม่มี package-lock.json
COPY package*.json ./
RUN npm install

# Prisma client
COPY prisma ./prisma
RUN npx prisma generate

# โค้ด + build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

ENV NODE_ENV=production
EXPOSE 3000

# ครั้งแรกยังไม่มี migrations → ใช้ db push ให้ schema ขึ้นอัตโนมัติ
CMD sh -c "npx prisma db push && node dist/index.js"
