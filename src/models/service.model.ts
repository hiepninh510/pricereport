import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ServiceDocument = HydratedDocument<Service>;

@Schema()
export class Service {
  @Prop({ unique: true })
  id: string;

  @Prop()
  name: string;

  @Prop()
  image: string;

  @Prop()
  price: number;

  @Prop()
  deposits: number;
}

export const ServiceSchema = SchemaFactory.createForClass(Service);
