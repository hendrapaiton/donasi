import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import * as hbs from 'hbs';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'view'));
  hbs.registerPartials(join(__dirname, '..', 'view/partials'));
  hbs.registerPartials(join(__dirname, '..', 'view/layout'));
  app.setViewEngine('hbs');

  await app.listen(3003);
}
bootstrap();
