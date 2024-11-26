import { User } from "../../../database/entities/User.entity";
import { ICreateUserDTO } from "../dtos/User.dto";

export interface IUserRepository {
    create(data: ICreateUserDTO ): Promise<void>;
    listAll():Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findByName(userName: string): Promise<User>;
    findById(id: string): Promise<User>;
    update(id: string, data: ICreateUserDTO): Promise<void>;
}