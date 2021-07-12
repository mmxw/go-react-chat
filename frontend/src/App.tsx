import React, {useState, ChangeEvent } from 'react';
import { connect, sendMessage } from './api';
import { Message, ChatHistory } from './types'
import './App.css';



function App() {

  const [msg, setMsg] = useState<Message>({time: "", message: "",})

  const [chatHistory, setChatHistory] = useState<ChatHistory>([])

  const onNewInput = (e: ChangeEvent<HTMLInputElement>) => {
    const msg = e.target.value
    const time = new Date().toLocaleString()
    setMsg({time, message: msg})
  }

  const onSubmitChat = () => {
    const newMessage = msg
    setChatHistory([...chatHistory, newMessage])
    setMsg({time: "", message: "",})
  }
  const send = () => {
    console.log(msg)
    sendMessage(msg)
  }

  connect(send)

  return (
    <div className="App">
      <h1>Let's Go. Start React. And Chat!</h1>
      <h2>Chat History</h2>
      <input
        value={msg.message}
        onChange={onNewInput}
      ></input>
      {chatHistory.map((m, index) => (
        <p key={index}>{m.time}: {m.message}</p>
      ))}
      <button onClick={onSubmitChat}> send message </button>
    </div>
  );
}

export default App;
