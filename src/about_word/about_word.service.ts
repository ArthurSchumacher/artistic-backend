import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAboutWordDto } from './dto/create-about_word.dto';
import { UpdateAboutWordDto } from './dto/update-about_word.dto';
import { InjectModel } from '@nestjs/mongoose';
import { AboutWord } from './schemas/about_word.schema';
import { Model } from 'mongoose';

@Injectable()
export class AboutWordService {
  constructor(@InjectModel(AboutWord.name) private aboutWordModel: Model<AboutWord>) { }

  async create(createAboutWordDto: CreateAboutWordDto): Promise<AboutWord> {
    const createdWord = new this.aboutWordModel(createAboutWordDto);
    return await createdWord.save();
  }

  async findAll(): Promise<AboutWord[]> {
    const words = await this.aboutWordModel.find().exec();
    if (words.length === 0) {
      throw new NotFoundException("Words not found.")
    }

    return words;
  }

  async findOne(id: number) {
    return `This action returns a #${id} aboutWord`;
  }

  async update(id: number, updateAboutWordDto: UpdateAboutWordDto) {
    return `This action updates a #${id} aboutWord`;
  }

  async remove(id: number) {
    return `This action removes a #${id} aboutWord`;
  }
}
