import useSocket from "../../hooks/useSocket";
import { DEFAULT_MEMBERS } from "../../constants/members";
import React, { useEffect } from "react";
import { MyCustomEvent } from "../../types/EventType";

const ChatEvent =  React.memo(() => {
  const { socket } = useSocket(DEFAULT_MEMBERS[0].id)
  useEffect(() => {
    const messageEventListener = (event: CustomEvent<MyCustomEvent>) => {
      console.log('I am listen a ', event.detail);
      const { content, type, from, to } = event.detail
      socket.emit('DIRECT_MESSAGE', {
        content,
        from,
        to
      }, (data: any) => {
        console.log('ssssss', data)
      })
    }

    window.addEventListener('SEND_MESSAGE' as keyof WindowEventMap, messageEventListener as EventListener);
    return () => {
      window.removeEventListener('SEND_MESSAGE', messageEventListener as EventListener);
    };
  }, [])
  return null
})
export default ChatEvent
