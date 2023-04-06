import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (clientId: string) => {
  const [socket, setSocket] = useState<Socket>(io("ws://localhost:3001", {
    auth: {
      clientId
    }
  }));
  useEffect(() => {
    socket.on("connect", () => {
      setSocket(socket);
      socket.emit('DIRECT_MESSAGE', {
        content: 'A callback message',
        from: '642d04fdbd473f3c5434a4d7',
        type: 'DIRECT_MESSAGE',
        toMember: '642d04fdbd473f3c5434a4d9'
      }, () => {
        console.log('ssssss')
      })
    });
    return () => { socket.close() };
  }, []);

  return {
    socket
  };
};

export default useSocket;
