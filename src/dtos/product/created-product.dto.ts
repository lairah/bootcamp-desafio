import { CategoryEntity } from '../../entities/category.entity';
import { ProductEntity } from '../../entities/product.entity';
import { CreateProductDto } from './create-product.dto';

export class CreatedProductDto extends CreateProductDto {
  id!: string;
  created_at!: Date;
  updated_at!: Date;
  category?: CategoryEntity

  constructor({ 
    id, 
    name, 
    description,  
    value,
    personCount,
    disponibility,
    image,
    created_at, 
    updated_at,
    category }: ProductEntity) 
    {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
    this.value = value;
    this.personCount = personCount;
    this.disponibility = disponibility;
    this.image = image;
    this.created_at = created_at; 
    this.updated_at = updated_at;
    this.category = category;
  }
}