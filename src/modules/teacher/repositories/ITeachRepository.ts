import { ICreateTeacherDTO } from "../dtos/ICreateTeacherDTO";
import { Teacher } from "../entities/Teacher";

interface ITeacherRepository {
  create(data: ICreateTeacherDTO): Promise<void>;
  findByEmail(email: string): Promise<Teacher>;
  findById(id: string): Promise<Teacher>;
  findByCPF(cpf: string): Promise<Teacher>;
}

export { ITeacherRepository };
