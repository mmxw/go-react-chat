package main

import (
	"fmt"
	"net/http"

	"github.com/mmxw/go-react-chat/pkg/websocket"
)

func serveWs(w http.ResponseWriter, r *http.Request) {
	fmt.Println(r.Host)

	ws, err := websocket.Upgrade(w, r)
	if err != nil {
		fmt.Fprintln(w, "%+V\n", err)
	}

	go websocket.Writer(ws)
	websocket.Reader(ws)
}

func setUpRoutes() {
	http.HandleFunc("/ws", serveWs)
}

func main() {
	setUpRoutes()
	http.ListenAndServe(":8080", nil)
	fmt.Println("Let's Go. Start React. And Chat!")
}
