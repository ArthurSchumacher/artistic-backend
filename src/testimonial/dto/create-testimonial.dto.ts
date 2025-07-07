import { IsOptional, IsString } from "class-validator";

export class CreateTestimonialDto {
    @IsString()
    quote: string;

    @IsString()
    name: string;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    designation?: string;

    @IsString()
    @IsOptional()
    src?: string;
}
