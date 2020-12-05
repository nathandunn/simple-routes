import { Module } from '@nestjs/common';
import { GmtController } from './gmt/gmt.controller';
import { GmtService } from './gmt/gmt.service';

@Module({
  controllers: [GmtController],
  providers: [GmtService]
})
export class GmtModule {}
