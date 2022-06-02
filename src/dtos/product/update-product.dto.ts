import { ValidationChain } from 'express-validator';
import { RequestDto } from '../request-dto/request.dto';

export class UpdateProductDto extends RequestDto {
  name?: string;
  description?: string;
  image?: string;
  value?: number;
  personCount?: number;
  disponibility?: boolean;
  categoryId?: string;
 

  static validators(): ValidationChain[] {
    return [
    
    ];
  }
}