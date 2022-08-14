FROM golang:1.18-alpine as BUILD

WORKDIR /app

COPY go.mod go.sum ./

RUN go mod download 

COPY . .

RUN go build -o main ./cmd/main.go

FROM alpine 

WORKDIR /run

COPY --from=BUILD /app/main /run/main
COPY --from=BUILD /app/assets /run/assets
COPY --from=BUILD /app/views /run/views

CMD ["./main"]