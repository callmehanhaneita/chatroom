import { ChatType } from "./types/ChatType";
import { createContext } from "react";

interface MyContextType {
  chats: ChatType[];
  setChats: Function
}

const Context = createContext<MyContextType>({
  chats: [],
  setChats: () => {}
});

export default Context;
