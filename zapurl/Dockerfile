# FROM node:20.19-alpine AS base

# WORKDIR /app

# COPY package.json .

# RUN npm install

# COPY . .

# EXPOSE 5173

# CMD ["npm", "run", "dev"]

# Use latest LTS Node.js version (v22)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY . .

# Expose Vite dev port
EXPOSE 5173

# Run Vite dev server
CMD ["npm", "run", "dev"]
