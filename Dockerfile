# Base Node
FROM node:10 AS base

# Create app directory
WORKDIR /usr/src/app

# Dependencies
FROM base AS dependencies  

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install --only=production

# Copy app files into the container
COPY . .

# Expose port 2401
EXPOSE 8001

# Starting the app
CMD ["node", "index.js"]