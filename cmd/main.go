package main

import (
	"log"

	"github.com/erfidev/meetup-app/internal/server"
)

func main() {
	if err := server.Run(); err != nil {
		log.Fatalln(err.Error())
	}
}
