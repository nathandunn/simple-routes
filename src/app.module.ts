import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GmtModule } from './gmt/gmt.module';
import { GmtController } from './gmt/gmt.controller';
import { GmtRepository } from './gmt/gmt.repository';
import { GmtService } from './gmt/gmt.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'dev.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    GmtModule,
  ],
  controllers: [AppController, GmtController],
  providers: [AppService, GmtService, GmtRepository],
})
export class AppModule {}
