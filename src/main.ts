import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { svelteTemplateEngine } from './svelte-templatee-engine';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.engine('svelte', svelteTemplateEngine);
  app.setViewEngine('svelte');

  await app.listen(3001);
  Logger.log(`Server listening: ${await app.getUrl()}`);
}
bootstrap();
