import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { AppError } from '../../../../errors/AppError';
import { UpdateUserAvatarUseCase } from './UpdateUserAvatarUseCase';

class UpdateUserAvatarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const avatarFile = request.file && request.file.filename;

    const updateUserAvatarUseCase = container.resolve(UpdateUserAvatarUseCase);

    if (!avatarFile) {
      throw new AppError('Upload failure');
    }

    await updateUserAvatarUseCase.execute({ user_id: id, avatarFile });

    return response.status(204).send();
  }
}

export { UpdateUserAvatarController };
