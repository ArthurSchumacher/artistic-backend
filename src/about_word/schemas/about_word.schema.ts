import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type AboutWordDocument = HydratedDocument<AboutWord>;

@Schema({
  timestamps: true,
})
export class AboutWord {
  @Prop({
    required: true,
    unique: true,
    default: () => uuidv4(),
  })
  uuid: string;

  @Prop({ required: true })
  text: string;
}

export const AboutWordSchema = SchemaFactory.createForClass(AboutWord);
