import React, { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Aside from "./components/aside/Aside";
import Chatroom from "./components/chatroom/Chatroom";

function App() {
  const [count, setCount] = useState(0)

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
