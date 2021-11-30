import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ANY_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: [
            'amqps://qhkbkrgl:C8rSzfLdH-u8rNhiUAWnDHqWN1uQB-JQ@fox.rmq.cloudamqp.com/qhkbkrgl',
          ],
          queue: 'cats_queue',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
