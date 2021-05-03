FROM node:16-alpine3.11 as build-stage
WORKDIR /mydir
EXPOSE 5000 
COPY . .
RUN npm install && \ 
    npm run build && \  
    chmod a+x /mydir && adduser -D appuser 
USER appuser

FROM nginx:1.19-alpine
COPY --from=build-stage /mydir/build/ /usr/share/nginx/html


# FROM node:latest
# WORKDIR /mydir
# EXPOSE 5000
# COPY . .
# RUN npm install
# RUN npm run build
# RUN npm install -g serve 
# CMD ["serve", "-s", "-l", "5000", "build"]