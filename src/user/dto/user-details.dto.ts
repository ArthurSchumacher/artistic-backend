import { Expose } from 'class-transformer';

export class UserDetailsDto {
  @Expose()
  uuid: string;

  @Expose()
  name: string;

  @Expose()
  email: string;

  @Expose()
  designation: string;

  @Expose()
  role: string;

  @Expose()
  image: number;
}