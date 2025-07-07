import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { WordService } from './word.service';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { WordDto } from './dto/word.dto';

@Controller('word')
@UseGuards(AdminGuard)
@Serialize(WordDto)
export class WordController {
  constructor(private readonly WordService: WordService) {}

  @Post()
  async create(@Body() createWordDto: CreateWordDto) {
    return this.WordService.create(createWordDto);
  }

  @Get()
  async findAll() {
    return this.WordService.findAll();
  }

  @Get(':uuid')
  async findOne(@Param('uuid') uuid: string) {
    return this.WordService.findOne(uuid);
  }

  @Patch(':uuid')
  async update(@Param('uuid') uuid: string, @Body() updateWordDto: UpdateWordDto) {
    return this.WordService.update(uuid, updateWordDto);
  }

  @Delete(':uuid')
  async remove(@Param('uuid') uuid: string) {
    return this.WordService.remove(uuid);
  }
}
