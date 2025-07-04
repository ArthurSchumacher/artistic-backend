import { PartialType } from '@nestjs/mapped-types';
import { CreateAboutWordDto } from './create-about_word.dto';

export class UpdateAboutWordDto extends PartialType(CreateAboutWordDto) {}
