import { Module } from '@nestjs/common';
import { GmtController } from './gmt.controller';
import { GmtService } from './gmt.service';
import { GmtRepository } from './gmt.repository';

@Module({
  controllers: [GmtController],
  providers: [GmtService, GmtRepository],
})
export class GmtModule {}
