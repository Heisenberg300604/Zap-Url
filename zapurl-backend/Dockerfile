# Dockerfile for zapurl-backend
# Uses Node 20 (matching frontend recommendation) and installs dependencies
FROM node:20.19-alpine

WORKDIR /app

# copy package files first to leverage docker cache
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm ci --silent

# Copy source
COPY . .

# Default environment
ENV NODE_ENV=production

EXPOSE 3000

# Start the server
CMD ["node", "src/server.js"]

