# Stage 1: Build Angular app
FROM node:19 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install 
COPY . .
RUN npm run build 

# Stage 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/front-end/browser /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]