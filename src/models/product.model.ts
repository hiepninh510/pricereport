import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;
@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  producer: string;

  @Prop()
  unit: string;
}
export const ProductSchame = SchemaFactory.createForClass(Product);
