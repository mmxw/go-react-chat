package main

import (
	"fmt"
	"net/http"
)

func setUpRoutes() {
	http.HandleFunc("/", handler)
}

func handler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello!")
}

func main() {
	setUpRoutes()
	http.ListenAndServe(":8080", nil)
	fmt.Println("Let's Go. Start React. And Chat!")
}
