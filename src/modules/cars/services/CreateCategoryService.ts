import { ICreateCategoriesRepository } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICreateCategoriesRepository) {}
  execute({ name, description }: IRequest): void {
    const categoriesAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoriesAlreadyExists) {
      throw new Error('Category already exists!');
    }
    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryService };
