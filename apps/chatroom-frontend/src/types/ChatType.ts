export enum MESSAGE_TYPE {
  DIRECT_MESSAGE = 'DIRECT_MESSAGE',
  GROUP_MESSAGE = 'GROUP_MESSAGE',
}

export interface ChatType {
  id: string;
  name: string;
  type: MESSAGE_TYPE,
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
