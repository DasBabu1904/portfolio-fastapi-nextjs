# Use Node 20 Alpine
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all source code
COPY . .

# Expose port
EXPOSE 3000

# Start Next.js dev server
CMD ["npm", "run", "dev"]
