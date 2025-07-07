import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Word } from './schemas/word.schema';
import { Model } from 'mongoose';

@Injectable()
export class WordService {
  constructor(@InjectModel(Word.name) private WordModel: Model<Word>) { }

  async create(createWordDto: CreateWordDto): Promise<Word> {
    const createdWord = new this.WordModel(createWordDto);
    return await createdWord.save();
  }

  async findAll(): Promise<Word[]> {
    const words = await this.WordModel.find().exec();
    if (words.length === 0) {
      throw new NotFoundException("Words not found.")
    }

    return words;
  }

  async findOne(uuid: string): Promise<Word> {
    const word = await this.WordModel.findOne({ uuid }).exec();
    if (!word) {
      throw new NotFoundException("Word not found.");
    }
    return word;
  }

  async update(uuid: string, updateWordDto: UpdateWordDto): Promise<Word> {
    const updatedWord = await this.WordModel.findOneAndUpdate({ uuid }, updateWordDto).exec();
    if (!updatedWord) {
      throw new NotFoundException("User not found.");
    }

    await updatedWord.save();

    return await this.findOne(updatedWord.uuid);
  }

  async remove(uuid: string) {
    return `This action removes a #${uuid} Word`;
  }
}
