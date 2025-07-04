import { Injectable } from '@nestjs/common';
import { CreateAboutWordDto } from './dto/create-about_word.dto';
import { UpdateAboutWordDto } from './dto/update-about_word.dto';

@Injectable()
export class AboutWordService {
  async create(createAboutWordDto: CreateAboutWordDto) {
    return 'This action adds a new aboutWord';
  }

  async findAll() {
    return `This action returns all aboutWord`;
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
