# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Build and verify Vite output
RUN echo "Building Vite React App..." \
  && npm run build \
  && echo "Build completed." \
  && ls -la /app \
  && ls -la /app/dist

# Stage 2: Serve the app
FROM node:18-alpine

WORKDIR /app

RUN npm install -g serve

# Copy the dist folder from the build stage
COPY --from=build /app/dist ./dist

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
