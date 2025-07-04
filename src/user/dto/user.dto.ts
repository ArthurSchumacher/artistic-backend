import { Expose } from 'class-transformer';

export class UserDto {
  @Expose()
  uuid: string;

  @Expose()
  name: string;

  @Expose()
  designation: string;

  @Expose()
  role: string;

  @Expose()
  image: string;
}