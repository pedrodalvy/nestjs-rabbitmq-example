import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3020);

  const rabbitMq = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
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
  );

  await rabbitMq.listen();
}

bootstrap();
