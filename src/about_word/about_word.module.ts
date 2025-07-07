import { Module } from '@nestjs/common';
import { AboutWordService } from './about_word.service';
import { AboutWordController } from './about_word.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AboutWord, AboutWordSchema } from './schemas/about_word.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: AboutWord.name, schema: AboutWordSchema }])],
  controllers: [AboutWordController],
  providers: [AboutWordService],
})
export class AboutWordModule {}
