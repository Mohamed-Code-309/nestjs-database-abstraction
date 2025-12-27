import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class UserMongo extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Number, required: true })
  salary: number;

  @Prop({ type: Boolean, default: false })
  isMarried: boolean;
}

export const UserSchema = SchemaFactory.createForClass(UserMongo);
