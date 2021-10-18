import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUsecase } from './ListCategoriesUseCase';

const categoriesRepository = null;
const listCategoriesUsecase = new ListCategoriesUsecase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUsecase,
);

export { listCategoriesController };
