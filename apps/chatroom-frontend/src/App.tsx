import React from "react";
import './App.css'
import Header from './components/header/Header'
import Aside from "./components/aside/Aside";
import Chatroom from "./components/chatroom/Chatroom";
import ChatEvent from "./components/event/ChatEvent";
import MyContext from "./components/context/Context";

function App() {
  return (
    <div className="App">
      <MyContext>
        <ChatEvent />
        <Header />
        <div className="container">
          <Aside />
          <Chatroom />
        </div>
      </MyContext>
    </div>
  )
}

export default App
