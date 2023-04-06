import { ChatType } from "./types/ChatType";
import { createContext } from "react";

interface MyContextType {
  chats: ChatType[];
}

const Context = createContext<MyContextType>({
  chats: [],
});

export default Context;
