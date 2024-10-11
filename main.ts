import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS for communication with the Next.js frontend
  await app.listen(3001); // Ensure it's running on port 3001
}
bootstrap();
