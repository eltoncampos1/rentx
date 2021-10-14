import { Request, Response } from 'express';
import { ListCategoriesUsecase } from './ListCategoriesUseCase';

class ListCategoriesController {
  constructor(private listCategoriesUsecase: ListCategoriesUsecase) {}
  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUsecase.execute();

    return response.status(201).json(all);
  }
}

export { ListCategoriesController };
