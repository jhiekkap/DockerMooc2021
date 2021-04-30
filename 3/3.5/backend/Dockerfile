FROM golang:1.16.3-alpine3.13
WORKDIR /mydir
EXPOSE 8080
COPY . .  
RUN go build  
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000

RUN chmod a+x /mydir && adduser -D userapp  
USER appuser

ENTRYPOINT ["./server" ]