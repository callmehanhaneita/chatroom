import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Chat } from './chat.model';
import { Member } from '../member/member.model';
import { Message } from '../message/message.model';

@Resolver((of) => Chat)
export class ChatResolver {
  @Query((returns) => [Chat])
  async chats() {
    const chat = new Chat();
    chat.id = '123';
    return [chat];
  }
  @ResolveField()
  async members(@Parent() group: Chat) {
    const member = new Member();
    member.name = 'member-name';
    return [member];
  }

  @ResolveField()
  async messages(@Parent() group: Chat) {
    const message = new Message();
    message.from = 'member-name';
    message.content = 'message-content';
    message.sentAt = new Date();
    return [message];
  }
}
