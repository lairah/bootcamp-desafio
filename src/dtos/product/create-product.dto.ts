import { body, ValidationChain } from 'express-validator';
import { RequestDto } from '../request-dto/request.dto';

export class CreateProductDto extends RequestDto {
  name!: string;
  description!: string;
  value!: number;
  personCount!: number;
  disponibility!: boolean;
  image!: string;
  categoryId!: string;
  

  static validators(): ValidationChain[] {
    return [
      body('name', 'Valor name não é uma string!').isString(),
      body('name', 'O campo name é obrigatório!')
        .not()
        .isEmpty({ ignore_whitespace: true }),

      body('description', 'Valor description não é uma string!').isString(),
      body('description', 'O campo description é obrigatório!')
        .not()
        .isEmpty({ ignore_whitespace: true }),

      body('value', 'Valor value não é um número!').isNumeric(),
      body('value', 'O campo value é obrigatório!')
        .not()
        .isEmpty({ ignore_whitespace: true }),

      body('personCount', 'Valor personCount não é um número!').isNumeric(),
      body('personCount', 'O campo personCount é obrigatório!')
        .not()
        .isEmpty({ ignore_whitespace: true }),

      body('disponibility', 'Valor disponibility deve ser preenchido com true ou false!').isBoolean(),
      body('disponibility', 'O campo disponibility é obrigatório!')
        .not()
        .isEmpty({ ignore_whitespace: true }),

      body('categoryId', 'Valor categoryId não é UUID!').isUUID(),
      body('categoryId', 'O campo categoryId é obrigatório!')
        .not()
        .isEmpty({ ignore_whitespace: true }),
    ];
  }
}