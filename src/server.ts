import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ApplicationModule } from './modules/app.module';
import * as process from 'process'

async function bootstrap() {
  const app = await NestFactory.create(ApplicationModule);

  const options = new DocumentBuilder()
    .setTitle('NestJS Docker')
    .setDescription('Imagem docker e código fonte de uma aplicação NestJS (Node) que gerencia Usuários e Agências Bancárias. Utilizando NestJS (Node), Swagger e MongoDB.')
    .setVersion('1.0.0')
    .setExternalDoc('API JSON', '/api-json')
    .setLicense('Apache License Version 2.0', 'https://www.apache.org/licenses/LICENSE-2.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
