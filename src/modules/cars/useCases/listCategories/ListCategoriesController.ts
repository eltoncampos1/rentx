import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ListCategoriesUsecase } from './ListCategoriesUseCase';

class ListCategoriesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoriesUsecase = container.resolve(ListCategoriesUsecase);
    const all = await listCategoriesUsecase.execute();

    return response.status(201).json(all);
  }
}

export { ListCategoriesController };
