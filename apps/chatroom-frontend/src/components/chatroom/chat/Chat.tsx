import './Chat.css'
import { ChatType, MemberType, MessageType } from "../../../types/ChatType";
import memberSvg from "../../../assets/member.svg"
import { DEFAULT_MEMBERS } from "../../../constants/members";
import formatDate from "../../../utils/timeUtil";
import React, { useState } from "react";

function Chat({ activeChat }: { activeChat: ChatType | undefined }) {
  return (
    <div className="chat">
      {
        activeChat && <div style={{ height: '100%', display: "flex", flexDirection: "column" }}>
          <ChatHeader title={activeChat.name} memberCount={activeChat.members.length}/>
          <ChatSpace members={activeChat.members} messages={activeChat.messages} myMemberId={DEFAULT_MEMBERS[0].id} />
          <ChatInputBox />
        </div>
      }
    </div>
  )
}
function ChatHeader({title, memberCount}: {title: string, memberCount: number}) {
  return <div className="chat-header">
    <span className="chat-title">{title}</span>
    {memberCount >= 2 && <div className="chat-members">
      <img src={memberSvg} className="member-icon" alt="member icon" />
      {memberCount}
    </div>}
  </div>
}

function ChatSpace({members, messages, myMemberId}: {members: MemberType[], messages: MessageType[], myMemberId: string}) {
  return <div style={{ flexGrow: 1 }}>{
    messages.map((message) => {
      const member = (members.find(member => member.id === message.from)) || DEFAULT_MEMBERS[0]
      return <Message key={message.id} content={message.content} fromMember={member} myMemberId={myMemberId} createAt={message.createdAt} />
    })
  }</div>
}

function Message({content, fromMember, myMemberId, createAt}: {content: string, fromMember: MemberType, myMemberId: string, createAt: Date}) {
  if (fromMember.id === myMemberId) {
    return <div className="message-sent">
      <img src={fromMember.avatar} />
      <div className="message-info">
        <div style={{ display: "flex", flexDirection: "row-reverse" }}>
          <span className="message-sent-at">{formatDate(new Date(createAt))}</span>
          <span className="message-from">{fromMember.name}</span>
        </div>
        <span className="message-sent-content">{content}</span>
      </div>
    </div>
  }
  return <div className="message-received">
    <img src={fromMember.avatar} />
    <div className="message-info">
      <div style={{ display: "flex" }}>
        <span className="message-from">{fromMember.name}</span>
        <span className="message-sent-at">{formatDate(new Date(createAt))}</span>
      </div>
      <span className="message-received-content">{content}</span>
    </div>
  </div>
}

function ChatInputBox() {
  const [text, setText] = useState<string>('');
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setText(event.target.value);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>): void => {
    if (event.key === 'Enter' && !event.shiftKey) {
      handleSubmit();
      event.preventDefault();
    }
  };
  const handleSubmit = (): void => {
    console.log('Submitted text: ', text);
    setText('');
  };
  return (
    <div className="chat-input-box">
      <textarea value={text} onChange={handleTextChange} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default Chat
