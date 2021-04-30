FROM node:16-alpine3.11 as build-stage
WORKDIR /mydir
EXPOSE 5000
RUN node -v && npm -v
COPY . .
RUN npm install && \ 
    REACT_APP_BACKEND_URL=http://localhost:8080 npm run build && \  
    chmod a+x /mydir && adduser -D appuser 
USER appuser

FROM nginx:1.19-alpine
COPY --from=build-stage /mydir/build/ /usr/share/nginx/html