import './Chatroom.css'
import Chats from "./chats/Chats";
import React, { useContext, useEffect, useState } from "react";
import Chat from "./chat/Chat";
import Context from "../../Context";
import client from "../../utils/client";
import { gql } from "@apollo/client";
import { DEFAULT_MEMBERS } from '../../constants/members';

function Chatroom() {
  const { chats, setChats } = useContext(Context);
  const [activeChat, setActiveChat] = useState<number>(-1)

  useEffect(() => {
    client.query({
      query: gql`
        query getChats($id: String!) {
          chats(memberId: $id) {
            id,
            name,
            members {
              id,
              name,
              avatar
            },
            messages {
              id,
              from,
              content
              createdAt,
            }
          }
        }`,
      variables: { id: DEFAULT_MEMBERS[0].id }
    })
    .then(({ data }) => {
      setChats(data.chats);
    });
    },[])

  return (
    <div className="chatroom">
      <Chats chats={chats} activeChat={activeChat} onChatSelected={(index: number) => setActiveChat(index)}/>
      {activeChat !== -1 && <Chat activeChat={chats[activeChat]}/> }
    </div>
  )
}
export default Chatroom
