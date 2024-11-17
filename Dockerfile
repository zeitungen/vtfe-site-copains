# Use the official Nginx image as the base image
FROM nginx:alpine

# Copy the static site files to the Nginx html directory
COPY . /usr/share/nginx/html