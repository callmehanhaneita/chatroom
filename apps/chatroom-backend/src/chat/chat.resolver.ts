import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Chat } from './chat.model';
import { Message } from '../message/message.model';
import { ChatService } from './chat.service';
import { MemberService } from '../member/member.service';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(
    private chatService: ChatService,
    private memberService: MemberService,
  ) {}

  @Query((returns) => [Chat])
  async chats() {
    const chat = new Chat();
    chat.id = '123';
    return [chat];
  }
  @ResolveField()
  async members(@Parent() group: Chat) {
    return await this.memberService.findAll();
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
