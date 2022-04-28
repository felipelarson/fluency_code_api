import bcrypt from "bcrypt";
import { getRepository, Repository } from "typeorm";

import { ICreateAdminrDTO } from "../../dtos/ICreateAdminDTO";
import { Admin } from "../../entities/Admin";
import { IAdminRepository } from "../IAdminRepository";

class AdminRepository implements IAdminRepository {
  private repository: Repository<Admin>;

  constructor() {
    this.repository = getRepository(Admin);
  }

  async create({
    biography,
    cpf,
    email,
    name,
    password,
    phone,
    photo_url,
  }: ICreateAdminrDTO): Promise<void> {
    const admin = this.repository.create({
      biography,
      cpf,
      email,
      name,
      password,
      phone,
      photo_url,
    });

    await this.repository.save(admin);
  }
  async findByEmail(email: string): Promise<Admin> {
    const admin = await this.repository.findOne({ email });
    return admin;
  }
  async findById(id: string): Promise<Admin> {
    const admin = await this.repository.findOne(id);
    return admin;
  }

  async findByCPF(cpf: string): Promise<Admin> {
    const admin = await this.repository.findOne({ cpf });
    return admin;
  }

  async list(): Promise<Admin[]> {
    return this.repository.find();
  }

  async update(id: string, data: any): Promise<void> {
    const repo = getRepository(Admin);

    const user = await repo.findOne({ id });

    user.cpf = data.cpf ?? user.cpf;
    user.phone = data.phone ?? user.phone;
    user.biography = data.biography ?? user.biography;
    user.description = data.description ?? user.description;
    user.name = data.name ?? user.name;
    user.password = data.password
      ? await bcrypt.hash(data.password, 10)
      : user.password;

    await repo.save(user);
  }
}

export { AdminRepository };
