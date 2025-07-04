import { Module } from '@nestjs/common';
import { AboutWordService } from './about_word.service';
import { AboutWordController } from './about_word.controller';

@Module({
  controllers: [AboutWordController],
  providers: [AboutWordService],
})
export class AboutWordModule {}
