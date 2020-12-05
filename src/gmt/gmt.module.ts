import { Module } from '@nestjs/common';
import { GmtController } from './gmt.controller';
import { GmtService } from './gmt.service';

@Module({
  controllers: [GmtController],
  providers: [GmtService],
})
export class GmtModule {}
