import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    allowedHeaders: '*',
    origin: '*',
    credentials: true,
  });
  app.useGlobalPipes(new ValidationPipe())

  setupSwagger(app)

  await app.listen(5500);
}
bootstrap();
