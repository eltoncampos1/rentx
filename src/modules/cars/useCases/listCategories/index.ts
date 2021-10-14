import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoriesController';
import { ListCategoriesUsecase } from './ListCategoriesUseCase';

const categoryRepository = new CategoriesRepository();
const listCategoriesUsecase = new ListCategoriesUsecase(categoryRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUsecase,
);

export { listCategoriesController };
