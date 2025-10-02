import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger config
  const config = new DocumentBuilder()
    .setTitle('Yangon Hotel Directory API')
    .setDescription('API documentation for Hotels, Auth, and Contact modules')
    .setVersion('1.0')
    .addBearerAuth() // enables JWT auth in Swagger UI
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  // ✅ Enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // remove unexpected fields
      forbidNonWhitelisted: true, // throw error if extra fields
      transform: true,          // auto-transform DTO types
    }),
  );

  // ✅ Enable CORS (for React frontend)
  app.enableCors({
    origin: '*', // (you can restrict to your frontend domain later)
    credentials: true,
  });

  await app.listen(process.env.PORT || 3000);
  console.log(`🚀 Server is running on http://localhost:${process.env.PORT || 3000}`);
}
bootstrap();
