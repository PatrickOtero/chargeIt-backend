import { AppDataSource } from "../../../../data-source";
import { Repository } from "typeorm";
import { User } from "../../../../database/entities/User.entity";
import { IUserRepository } from "../IUserRepository";
import { ICreateUserDTO } from "../../dtos/User.dto";

export class UserRepository implements IUserRepository {

    private repository: Repository<User>

    constructor() {
        this.repository = AppDataSource.getRepository(User)
    }

    async create(data: ICreateUserDTO): Promise<void> {
        const {userName, email, password} = data

        const user = this.repository.create({
            userName,
            email,
            password
        })

        await this.repository.save(user)
    }
    async listAll(): Promise<User[]> {
        const users = await this.repository.find();

        return users
    }

    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ where: { id }} )

        return user
    }

    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ where: { email }} )

        return user
    }

    async findByName(userName: string): Promise<User> {
        const user = await this.repository.findOne({ where: { userName }} )

        return user
    }

    async update(id: string, data: ICreateUserDTO): Promise<void> {
        const updatedUser = await this.repository.update({id}, data)

        return null
    }

}