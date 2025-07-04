import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type TestimonialDocument = HydratedDocument<Testimonial>;

@Schema({
    timestamps: true,
})
export class Testimonial {
    @Prop({
        required: true,
        unique: true,
        default: () => uuidv4(),
    })
    uuid: string;

    @Prop({ required: true })
    quote: string;

    @Prop({ required: true })
    name: string;

    @Prop()
    title?: string;

    @Prop()
    designation?: string;

    @Prop()
    src?: string;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
