import { PublicUser, UserDTO } from "../../dtos/user.dto";
import { User } from "../../entities/user.model";
import { ServiceResult } from "../../utils/serviceResult.type";

export interface IUserService {
  getUsers(): Promise<PublicUser[]>;
  getById(id: string): Promise<PublicUser | null>;
  getByEmail(email: string): Promise<User | null>;
  getByAreaId(areaId: string): Promise<PublicUser[]>;
  addUser(user: UserDTO): Promise<ServiceResult<PublicUser>>;
  updateUser(id: string, user: UserDTO): Promise<ServiceResult<PublicUser | null>>;
  deleteUser(id: string): Promise<{ success: boolean; message: string }>;
}
