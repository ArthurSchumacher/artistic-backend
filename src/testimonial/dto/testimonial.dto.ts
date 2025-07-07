import { Expose } from 'class-transformer';

export class TestimonialDto {
    @Expose()
    uuid: string;
    
    @Expose()
    quote: string;

    @Expose()
    name: string;

    @Expose()
    title?: string;

    @Expose()
    designation?: string;

    @Expose()
    src?: string;
}