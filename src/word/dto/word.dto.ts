import { Expose } from 'class-transformer';

export class WordDto {
  @Expose()
  uuid: string;

  @Expose()
  text: string;
}