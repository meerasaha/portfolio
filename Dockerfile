ARG NODE_VERSION=22.14.0
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN --mount=type=cache,target=/root/.npm \
    npm ci --legacy-peer-deps

COPY . .

RUN npm run build

# -------- Stage 2: Lightweight production image --------
FROM node:${NODE_VERSION}-alpine AS production

# Install CA certificates
RUN apk add --no-cache ca-certificates

WORKDIR /app

RUN npm install -g serve

COPY --from=builder /app/dist ./dist

ENV NODE_ENV=production

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]