import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as cors from 'cors'; // Import the cors package
import { nomoMiddleware } from 'nomo-auth';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Garrafa no Mar')
    .setDescription('Garrafa no mar api')
    .setVersion('1.0')
    .addSecurity('Bearer', {type: 'http', scheme: 'bearer'})
    .addTag('user')
    .addTag('auth')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
    app.use(cors())
     app.use(nomoMiddleware({
        nomo_jwt_secret_key: process.env.SECRET_KEY
      }));
  await app.listen(4000);
}
bootstrap();
