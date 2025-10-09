import { PublicUser } from "../../dtos/user.dto";
import { User } from "../../entities/user.model";

export interface IUserRepository {
  getAll(): Promise<PublicUser[]>;
  getById(id: string): Promise<PublicUser | null>;
  getByEmail(email: string): Promise<User | null>;
  getByAreaId(areaId: string): Promise<PublicUser[]>
  create(user: User): Promise<void>;
  update(user: User): Promise<void>;
  delete(user: User): Promise<void>;
}