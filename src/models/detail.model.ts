import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type DetailProductDocument = HydratedDocument<DetailProduct>;

@Schema()
export class DetailProduct {
  @Prop()
  specifications: string;

  @Prop()
  description: string;

  @Prop()
  product: string;
}

export const DetailProductSchame = SchemaFactory.createForClass(DetailProduct);
