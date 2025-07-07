import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type WordDocument = HydratedDocument<Word>;

@Schema({
  timestamps: true,
})
export class Word {
  @Prop({
    required: true,
    unique: true,
    default: () => uuidv4(),
  })
  uuid: string;

  @Prop({ required: true })
  text: string;
}

export const WordSchema = SchemaFactory.createForClass(Word);
