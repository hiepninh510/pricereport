import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SupplieDocument = HydratedDocument<Supplie>;
@Schema()
export class Supplie {
  @Prop({ unique: true })
  id: string;

  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  unit: string;
}

export const SupplieSchema = SchemaFactory.createForClass(Supplie);
