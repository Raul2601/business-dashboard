### STAGE 1: Build ###
FROM node:12.7-alpine AS build
# Create a directory where our app will be placed
RUN mkdir -p /app

# Change directory so that our commands run inside this new directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json /app/

# Install dependecies
RUN npm install

# Get all the code needed to run the app
COPY . /app/

# RUN npm run build
#test
# Expose the port the app runs in
EXPOSE 8080

# Serve the app
CMD ["npm", "start"]