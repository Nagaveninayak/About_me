# Use an official Node.js runtime as the base image
FROM node:20.5.1-alpine3.17

# Set the working directory in the container
WORKDIR /about_me

# Copy package.json and package-lock.json to the working directory
COPY package.json .

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Install Next.js globally
RUN npm install -g next

# Expose the port that your Next.js app will run on
EXPOSE 3000

# Start your Next.js app
CMD ["npm", "run", "dev"]
