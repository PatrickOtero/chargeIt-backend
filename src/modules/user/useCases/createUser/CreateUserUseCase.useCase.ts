import { inject, injectable } from "tsyringe"
import { ICreateUserDTO } from "../../dtos/User.dto";
import { IUserRepository } from "../../repository/IUserRepository";
import bcrypt from "bcryptjs"
import { AppError } from "../../../../errors/appError";

@injectable()
export class CreateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository) {}

    async execute(data: ICreateUserDTO): Promise<void> {
        const userExists = await this.userRepository.findByEmail(data.email)

        if (userExists) {
            throw new AppError("User already exists", 401)
        }

        const hashPassword = await bcrypt.hash(data.password, 8)

        data.password = hashPassword

        await this.userRepository.create(data)
    }
}