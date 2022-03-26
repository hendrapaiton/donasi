import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [IndexModule, ReportModule],
})
export class AppModule {}
