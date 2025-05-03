import { IsEmail, IsString } from "class-validator";

export class CreateEmailDto {
    @IsString()
    subject: string;

    @IsString()
    message: string;

    @IsString()
    name: string;

    @IsString()
    @IsEmail()
    email: string;
}
