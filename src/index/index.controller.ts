import { Controller, Get, Render } from '@nestjs/common';
import { IndexService } from './index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  @Render('page/index.hbs')
  root() {
    return this.indexService.getHello();
  }
}
