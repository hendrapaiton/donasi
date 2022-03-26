import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndexModule } from './index/index.module';
import { ReportModule } from './report/report.module';

@Module({
  imports: [IndexModule, ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
