import { Request, Response } from 'express';
import { container, inject, injectable } from 'tsyringe';
import { ImportCategoryUseCase } from './ImportCategoryUsecase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;
    const importCategoryUseCase = container.resolve(ImportCategoryUseCase);

    await importCategoryUseCase.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
