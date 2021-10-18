import { Specification } from '../entities/Specification';

interface ICreacteSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationRepository {
  create({ name, description }: ICreacteSpecificationDTO): Promise<void>;
  findByName(name: string): Promise<Specification | undefined>;
}

export { ISpecificationRepository, ICreacteSpecificationDTO };
