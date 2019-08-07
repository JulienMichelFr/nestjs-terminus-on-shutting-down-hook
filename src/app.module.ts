import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TerminusModule } from '@nestjs/terminus';

@Module({
  imports: [
    TerminusModule.forRoot({
      endpoints: [],
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
