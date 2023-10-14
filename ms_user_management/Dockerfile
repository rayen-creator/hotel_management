# Use an official Node.js runtime as the base image
FROM node:18

# Set the working directory within the container
WORKDIR /ms_auth

# Copy only the Yarn-specific files (yarn.lock and package.json)
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of your application code into the container
COPY . .

# Build your application (if needed)
RUN yarn build

# Specify the command to run your application using Yarn
CMD [ "yarn", "run", "start:dev" ]