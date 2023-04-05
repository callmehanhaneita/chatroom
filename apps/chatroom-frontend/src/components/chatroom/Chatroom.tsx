import './Chatroom.css'
import Chats from "./chats/Chats";
import React, { useState } from "react";
import Chat from "./chat/Chat";
import useChatsQuery from "../../hooks/useChatsQuery";

function Chatroom() {
  const [activeChat, setActiveChat] = useState<number>(-1)
  const { chats } = useChatsQuery("642d04fdbd473f3c5434a4d9")
  return (
    <div className="chatroom">
      <Chats chats={chats} activeChat={activeChat} onChatSelected={(index: number) => setActiveChat(index)}/>
      <Chat />
    </div>
  )
}
export default Chatroom
