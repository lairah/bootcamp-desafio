import {Router, Request, Response, NextFunction} from 'express';
import { CategoryController } from './controllers/category.controller';
import { CategoryService } from './services/category.service';
import { AppDataSource } from './config/data-source';
import { validator } from './middlewares';
import multer from 'multer';
import { multerConfig } from './config/multer';
import { UpdateProductDto } from './dtos/product/update-product.dto';
import { CreateCategoryDto } from './dtos/category/create-category.dto';
import { CreateProductDto } from './dtos/product/create-product.dto';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';

const routes = Router();

const categoryController = new CategoryController(
  new CategoryService(AppDataSource)
);

const productController = new ProductController(
  new ProductService(AppDataSource)
);


routes.get('/', (request: Request, response: Response) => {

  return response.json({ status: 'success', version: '1.0.0'}).status(200)
});

routes.get('/', (request: Request, response: Response, next: NextFunction)=>{
  categoryController.getAll(request, response).catch((error:Error) => {
    next(error)
  });
});

routes.post('/', 
  CreateCategoryDto.validators(),
  validator,
  (request: Request, response: Response, next: NextFunction)=>{
    categoryController.create(request, response).catch((error:Error) => {next(error)});
});

routes.put('/update/:id', 
  CreateCategoryDto.validators(),
  validator,
  (request: Request, response: Response, next: NextFunction)=>{
    categoryController.update(request, response).catch((error:Error) => {next(error)});
});

routes.delete('/delete/:id', (request: Request, response: Response, next: NextFunction)=>{
  categoryController.delete(request, response).catch((error:Error) => {
  next(error)
  });
})
  
/******************************PRODUCT ROUTES***********************************/

routes.post('/', 
  multer(multerConfig).single('image'),
  CreateProductDto.validators(),
  validator,
  (request: Request, response: Response, next: NextFunction)=>{
    productController.create(request, response).catch((error:Error) => {next(error)});
});

routes.get('/', (request: Request, response: Response, next: NextFunction)=>{
  productController.getAll(request, response).catch((error:Error) => {
    next(error)
  });
});

routes.get('/:id', (request: Request, response: Response, next: NextFunction)=>{
  productController.show(request, response).catch((error:Error) => {
    next(error)
  });
});

routes.put('/update/:id', 
  multer(multerConfig).single('image'),
  UpdateProductDto.validators(),
  validator,
  (request: Request, response: Response, next: NextFunction)=> {
    productController.update(request, response).catch((error:Error) => {next(error)});
});

routes.delete('/delete/:id', (request: Request, response: Response, next: NextFunction)=>{
  productController.delete(request, response).catch((error:Error) => {
  next(error)
  });
})

export{routes};