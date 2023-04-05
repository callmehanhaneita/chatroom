import './Chats.css'
import { ChatType } from "../../../types/Chat";

function Chats({ chats }: { chats: ChatType[] }) {
  return (
    <div className="chats">
      {
        chats.map(function(chat){
          return <div key={chat.id}>{chat.name}</div>
      })
      }
    </div>
  )
}
export default Chats
