import { Message } from "../types";

const socket = new WebSocket("ws://localhost:8080/ws");

export const connect = (callback: (e: MessageEvent) => any | null) => {
    console.log("attempting connection...");

    socket.onopen = () => {
        console.log("successfully connected");
    };

    socket.onmessage = msg => {
        console.log(msg);
        callback(msg)
    };

    socket.onclose = (e: CloseEvent) => {
        console.log("socket closed connection: ", e);
    };

    socket.onerror = err => {
        console.log("socket error: ", err);
    };
    
}

export const sendMessage = (msg: Message) => {
    console.log("sending message", msg);
    socket.send(msg.message)
}