import './Chatroom.css'
import Chats from "./chats/Chats";
import React from "react";
import Chat from "./chat/Chat";
import useChatsQuery from "../../hooks/useChatsQuery";

function Chatroom() {
  const { chats } = useChatsQuery("642d04fdbd473f3c5434a4d9")
  return (
    <div className="chatroom">
      <Chats chats={chats}/>
      <Chat />
    </div>
  )
}
export default Chatroom
