import { Args, Query, Resolver } from '@nestjs/graphql';
import { Chat } from './chat.model';
import { ChatService } from './chat.service';

@Resolver((of) => Chat)
export class ChatResolver {
  constructor(private chatService: ChatService) {}

  @Query((returns) => [Chat])
  async chats(@Args('memberId', { type: () => String }) memberId: string) {
    const chat = await this.chatService.findByMemberId({ memberId });
    console.log('chat', chat);
    return chat;
  }
}
