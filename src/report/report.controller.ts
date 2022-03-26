import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class ReportController {
  @Get('/report')
  @Render('Report')
  getIndex(): object {
    return { page: 'Halaman Report' };
  }
}
