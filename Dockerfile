# FROM node:16

# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# COPY . .

# EXPOSE 5000
# CMD ["node", "index.js"]

# dockerfile for sample server -- checking 

FROM node:16 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --only=production
COPY . .

FROM node:16-alpine

WORKDIR /app
COPY --from=builder /app /app

EXPOSE 5000
CMD ["node", "index.js"]