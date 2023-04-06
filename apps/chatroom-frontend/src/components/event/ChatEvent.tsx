import useSocket from "../../hooks/useSocket";
import { DEFAULT_MEMBERS } from "../../constants/members";
import React, { useContext, useEffect } from "react";
import { MyCustomEvent } from "../../types/EventType";
import Context from "../../Context";
import client from "../../utils/client";
import { gql } from "@apollo/client";
import { ChatType } from "../../types/ChatType";
import getQuery from "../../utils/urlUtil";

const ChatEvent =  React.memo(() => {
  const { socket } = useSocket(DEFAULT_MEMBERS[getQuery('user') || 'Jenny'].id)
  const { chats, setChats } = useContext(Context);

  useEffect(() => {
    socket.on('DIRECT_MESSAGE_RECV', (data) => {
      const originChats = chats.slice() as ChatType[];
      const updateChats = originChats.map(chat => {
        if (chat.id === data.to) {
          const messages = chat.messages.slice()
          messages.push(data)
          return { ...chat, messages }
        } else return chat;
      })
      setChats(updateChats)
    })
    const messageEventListener = (event: CustomEvent<MyCustomEvent>) => {
      const { content, from, to } = event.detail
      socket.emit('DIRECT_MESSAGE', {
        content,
        from,
        to
      })
    }
    window.addEventListener('SEND_MESSAGE' as keyof WindowEventMap, messageEventListener as EventListener);
    return () => {
      window.removeEventListener('SEND_MESSAGE', messageEventListener as EventListener);
    };
  }, [chats])

  return null
})
export default ChatEvent
