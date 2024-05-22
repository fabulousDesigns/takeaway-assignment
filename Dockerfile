# Base Image: Uses a lightweight Node.js image based on Alpine Linux
#   - Version: 21.10.0-alpine3.15
#   - Purpose: To ensure the final container image is as small as possible
FROM node:21.10.0-alpine3.15 as build

# Sets the working directory inside the container to /app
#   - All subsequent commands will be executed in this directory
WORKDIR /app

# Copies package.json and package-lock.json into the container
#   - These files list the project dependencies
COPY package*.json ./

# Installs the project dependencies using npm ci
#   - Ensures a clean installation of dependencies without relying on cache
RUN npm ci

# Copies the rest of the application source code into the container
#   - Excludes node_modules since it will be copied separately in the production stage
COPY . .

# Base Image: Reuses the same lightweight Node.js image based on Alpine Linux
#   - Version: 21.10.0-alpine3.15
#   - Purpose: To keep the final container image size minimal
FROM node:21.10.0-alpine3.15 as production

# Sets the working directory inside the container to /app
#   - All subsequent commands will be executed in this directory
WORKDIR /app

# Copies the node_modules directory from the build stage
#   - Avoids re-installing dependencies, saving time and resources
COPY --from=build /app/node_modules ./node_modules

# Copies the main entry point (index.js) and other necessary directories
#   - src and resources directories are included
COPY --from=build /app/index.js ./index.js
COPY --from=build /app/src ./src
COPY --from=build /app/resources ./resources

# Informs Docker that the container listens on the specified network ports at runtime
#   - Port 5000 is commonly used for Node.js applications
EXPOSE 5000

# Specifies the command to run when the container starts
#   - Typically starts the application
CMD [ "npm", "run", "start" ]