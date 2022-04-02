import { Body, Controller, Get, Post, Redirect, Render } from '@nestjs/common';
import { CreateIndex } from './createIndex.dto';
import { IndexService } from './index.service';

@Controller()
export class IndexController {
  constructor(private readonly indexService: IndexService) {}

  @Get()
  @Render('page/index.hbs')
  formulirIndex() {
    return this.indexService.getHello();
  }

  @Post()
  @Redirect('/')
  async keteranganIndex(@Body() body: CreateIndex) {
    console.log(body);
  }
}
