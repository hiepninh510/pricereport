import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type Product_ServiceDocument = HydratedDocument<Product_Service>;
@Schema()
export class Product_Service {
  @Prop()
  id_product: string;
  @Prop()
  id_service: string;
}
export const Product_ServiceSchema =
  SchemaFactory.createForClass(Product_Service);

Product_ServiceSchema.index({ id_product: 1, id_service: 1 }, { unique: true });
