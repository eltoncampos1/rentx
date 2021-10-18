import { Specification } from '../entities/Specification';

interface ICreacteSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreacteSpecificationDTO): void;
  findByName(name: string): Specification | undefined;
}

export { ISpecificationRepository, ICreacteSpecificationDTO };
