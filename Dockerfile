# Stage 1: Build Angular app
FROM node:22 AS build
WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies (force legacy-peer-deps to avoid Angular 19 conflicts)
RUN npm install --legacy-peer-deps

# Copy the rest of the app
COPY . .

# Build Angular app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy build output to Nginx html folder
COPY --from=build /app/dist/front-end/browser /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
