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
    });
    return () => { socket.close() };
  }, []);

  return {
    socket
  };
};

export default useSocket;
