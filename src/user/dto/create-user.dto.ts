import {
    IsEmail,
    IsIn,
    IsString,
    IsStrongPassword,
} from 'class-validator';

export class CreateUserDto {
    @IsString()
    name: string;

    @IsEmail()
    email: string;

    @IsString()
    designation: string;

    @IsIn(['admin', 'user'])
    role: string;

    @IsString()
    image: string;

    @IsString()
    @IsStrongPassword()
    password: string;
}