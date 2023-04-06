import React from 'react'
import './App.css'
import Header from './components/header/Header'
import Aside from "./components/aside/Aside";
import Chatroom from "./components/chatroom/Chatroom";
import useSocket from "./hooks/useSocket";
import { DEFAULT_MEMBERS } from "./constants/members";

function App() {
  const { socket } = useSocket(DEFAULT_MEMBERS[0].id)

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Aside />
        <Chatroom />
      </div>
    </div>
  )
}

export default App
