import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema({
  timestamps: true,
})
export class User {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  designation: string;

  @Prop({ required: true, enum: ['admin', 'user'], default: 'user' })
  role: string;

  @Prop()
  image: string;

  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
