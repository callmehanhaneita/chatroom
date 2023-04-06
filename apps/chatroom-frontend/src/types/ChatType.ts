export interface ChatType {
  id: string;
  name: string;
  type: string,
  members: MemberType[],
  messages: MessageType[],
}

export interface MemberType {
  id: string;
  name: string;
  avatar: string,
}

export interface MessageType {
  id: string;
  content: string,
  createdAt: Date,
  from: string
  toGroup?: string,
  toMember?: string
}
