import { Module } from '@nestjs/common';
import { IndexModule } from './index/index.module';
import { ReportModule } from './report/report.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [IndexModule, ReportModule, LoginModule],
})
export class AppModule {}
