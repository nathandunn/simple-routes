import { Module } from '@nestjs/common';
import { GmtController } from './gmt/gmt.controller';

@Module({
  controllers: [GmtController]
})
export class GmtModule {}
