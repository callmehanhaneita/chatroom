import React from "react";
import './App.css'
import Header from './components/header/Header'
import Aside from "./components/aside/Aside";
import Chatroom from "./components/chatroom/Chatroom";
import { DEFAULT_MEMBERS } from "./constants/members";
import Context from "./Context";
import useChatsQuery from "./hooks/useChatsQuery";
import ChatEvent from "./components/event/ChatEvent";

function App() {
  const { chats } = useChatsQuery(DEFAULT_MEMBERS[0].id)
  return (
    <div className="App">
      <Context.Provider value={{ chats }}>
        <ChatEvent />
        <Header />
        <div className="container">
          <Aside />
          <Chatroom />
        </div>
      </Context.Provider>
    </div>
  )
}

export default App
