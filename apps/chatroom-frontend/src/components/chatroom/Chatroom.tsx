import './Chatroom.css'
import Chats from "./chats/Chats";
import React, { useContext, useState } from "react";
import Chat from "./chat/Chat";
import Context from "../../Context";

function Chatroom() {
  const { chats } = useContext(Context);
  const [activeChat, setActiveChat] = useState<number>(-1)
  return (
    <div className="chatroom">
      <Chats chats={chats} activeChat={activeChat} onChatSelected={(index: number) => setActiveChat(index)}/>
      {activeChat !== -1 && <Chat activeChat={chats[activeChat]}/> }
    </div>
  )
}
export default Chatroom
