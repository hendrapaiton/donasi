import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  hbs.registerPartials(join(__dirname, '..', 'view/layout'));
  app.setViewEngine('hbs');

  app.useGlobalPipes(
    new ValidationPipe(),
  );

  await app.listen(3003);
}
bootstrap();
