import {
  ConnectedSocket,
  MessageBody,
  OnGatewayConnection,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';

import { Server } from 'socket.io';
import { EventService } from './event.service';

export interface DirectMessageEvent {
  content: string;
  from: string;
  type: string;
  to: string;
}

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class EventGateway implements OnGatewayInit, OnGatewayConnection {
  constructor(private eventService: EventService) {}

  @WebSocketServer()
  server: Server;

  afterInit(server) {
    console.log('server is inited');
  }

  async handleConnection(
    @ConnectedSocket() client: Socket,
    ...args: any[]
  ): Promise<any> {
    const groups = await this.eventService.findAllGroups(
      client.handshake.auth.clientId,
    );
    groups.forEach((group) => {
      client.join(group.id);
    });
  }

  @SubscribeMessage('DIRECT_MESSAGE')
  async handleMessage(
    @MessageBody() data: DirectMessageEvent,
    @ConnectedSocket() client: Socket,
  ) {
    this.server.to(data.to).emit('DIRECT_MESSAGE_RECV', await this.eventService.addDirectMessage(data));
  }
}
