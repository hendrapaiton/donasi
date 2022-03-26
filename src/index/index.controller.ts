import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class IndexController {
  @Get()
  @Render('Index')
  getIndex(): object {
    return { halo: 'Dunia' };
  }
}
