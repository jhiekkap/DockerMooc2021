FROM golang:latest
WORKDIR /mydir
EXPOSE 8080
COPY . .  
RUN go build && go test ./... 
ENV PORT=8080
ENV REQUEST_ORIGIN=http://localhost:5000

RUN chmod a+x /mydir && useradd -m appuser 
USER appuser

ENTRYPOINT ["./server" ]