import './Chatroom.css'
import Chats from "./chats/Chats";
import React, { useState } from "react";
import Chat from "./chat/Chat";
import useChatsQuery from "../../hooks/useChatsQuery";
import { DEFAULT_MEMBERS } from "../../constants/members";

function Chatroom() {
  const [activeChat, setActiveChat] = useState<number>(-1)
  const { chats } = useChatsQuery(DEFAULT_MEMBERS[0].id)
  return (
    <div className="chatroom">
      <Chats chats={chats} activeChat={activeChat} onChatSelected={(index: number) => setActiveChat(index)}/>
      <Chat activeChat={chats[activeChat]}/>
    </div>
  )
}
export default Chatroom
