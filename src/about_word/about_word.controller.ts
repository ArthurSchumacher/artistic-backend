import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AboutWordService } from './about_word.service';
import { CreateAboutWordDto } from './dto/create-about_word.dto';
import { UpdateAboutWordDto } from './dto/update-about_word.dto';

@Controller('about-word')
export class AboutWordController {
  constructor(private readonly aboutWordService: AboutWordService) {}

  @Post()
  async create(@Body() createAboutWordDto: CreateAboutWordDto) {
    return this.aboutWordService.create(createAboutWordDto);
  }

  @Get()
  async findAll() {
    return this.aboutWordService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.aboutWordService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateAboutWordDto: UpdateAboutWordDto) {
    return this.aboutWordService.update(+id, updateAboutWordDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.aboutWordService.remove(+id);
  }
}
