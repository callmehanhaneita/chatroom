import "./Chats.css";
import { ChatType, MemberType, MessageType } from "../../../types/ChatType";
import formatDate from "../../../utils/timeUtil";
import { DEFAULT_MEMBERS } from "../../../constants/members";
import getQuery from "../../../utils/urlUtil";

function Chats({
                 chats,
                 activeChat,
                 onChatSelected
               }: { chats: ChatType[], activeChat: number, onChatSelected: Function }) {
  return (
    <div className="chats">
      <div className="search">Search</div>
      {
        chats.map(function(chat, index) {
          return <ChatItem key={chat.id} active={activeChat === index} name={chat.name} members={chat.members}
                           messages={chat.messages} onChatSelected={() => onChatSelected(index)} />;
        })
      }
    </div>
  );
}

function ChatItem({
                    active,
                    name,
                    members,
                    messages,
                    onChatSelected
                  }: { active: boolean, name: string, members: MemberType[], messages: MessageType[], onChatSelected: Function }) {
  const formattedTime = messages.length > 0 ? formatDate(new Date(messages[messages.length - 1].createdAt)) : ''
  const content = messages.length > 0 ? messages[messages.length - 1].content: ''
  let chatTitle = name
  if (members.length <= 2) {
    const withMember = members.find(member => { return member.id !== DEFAULT_MEMBERS[getQuery('user') || 'Jenny'].id })
    chatTitle = !!withMember ? withMember.name : ''
  }
  return (
    <div className="chat-item" onClick={() => onChatSelected()} style={{ backgroundColor: active ? '#26252D' : '#1D1C21' }}>
      <img src={members[0].avatar} alt="Chat Image" />
      <div className="chat-info">
        <span className="chat-name">{chatTitle}</span>
        <span className="chat-content">{content}</span>
      </div>
      <span className="latest-message-timestamp">{formattedTime}</span>
    </div>
  );
}

export default Chats;
