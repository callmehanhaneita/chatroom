import React, { ReactNode, useState } from "react";
import { ChatType } from "../../types/ChatType";
import Context from "../../Context";

function MyContext({ children }: { children: ReactNode }) {
  const [chats, setChats] = useState<ChatType[]>([]);
  return (
    <Context.Provider value={{ chats, setChats }}>
      {children}
    </Context.Provider>
  );
}

export default MyContext;
