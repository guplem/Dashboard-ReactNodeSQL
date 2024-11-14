# Use official Node.js image as a parent image
FROM node:22

# Install netcat (to use 'nc' for waiting for MySQL to be ready)
RUN apt-get update && apt-get install -y netcat-openbsd

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# This seems to be necessary lately to make NPM install not take forever: https://forums.docker.com/t/npm-install-in-docker-tutorial-is-taking-forever/139328/14
RUN npm config set strict-ssl false

# Install dependencies
RUN npm install --force --loglevel verbose

# Copy the entrypoint script into the container
COPY entrypoint.sh ./entrypoint.sh

# Make sure the entrypoint script has executable permissions
RUN chmod +x ./entrypoint.sh

# Copy the rest of your application code into the container
COPY . .

# Expose the port that the API will run on
EXPOSE 3001

# Set the entrypoint to your custom entrypoint script
ENTRYPOINT ["bash", "./entrypoint.sh"]

# The CMD is not necessary because ENTRYPOINT already starts the app
# CMD ["npx", "ts-node", "src/index.ts"]
