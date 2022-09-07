import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { Logger } from '@nestjs/common';

const logger = new Logger('Main');

const microserviceOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'app',
    protoPath: join(__dirname, '../src/app.proto'),
    url: '0.0.0.0:5000',
  },
};

async function bootstrap() {
  const app = await NestFactory.createMicroservice(
    AppModule,
    microserviceOptions,
  );
  logger.log('Microservice is listening...');
  await app.listen();
}
bootstrap();
