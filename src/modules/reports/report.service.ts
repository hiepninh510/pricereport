import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DetailProduct } from 'src/models/detail.model';
import { Product } from 'src/models/product.model';
import { Product_Service } from 'src/models/product_service.model';
import { Service } from 'src/models/service.model';
import { Supplie } from 'src/models/supplie.model';

@Injectable()
export class ReportService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<any>,
    @InjectModel(DetailProduct.name) private detailProductModel: Model<any>,
    @InjectModel(Service.name) private serviceModel: Model<any>,
    @InjectModel(Supplie.name) private supplieModel: Model<any>,
    @InjectModel(Product_Service.name)
    private product_service_Model: Model<any>,
  ) {}
}
