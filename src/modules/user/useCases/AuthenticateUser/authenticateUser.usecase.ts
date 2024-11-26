import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken"
import * as bcrypt from "bcryptjs"
import { IUserRepository } from "../../repository/IUserRepository";
import { LoginDto } from "../../dtos/login.dto";
import { IUserResponse } from "../../interfaces/interfaces";
import { AppError } from "../../../../errors/appError";

@injectable()
export class AuthenticateUserUseCase {
    constructor(
        @inject("UserRepository")
        private userRepository: IUserRepository
    ) {}

    async execute(data: LoginDto): Promise<IUserResponse> {
        try {

            const userExists = await this.userRepository.findByEmail(data.email)

            if (!userExists) {
                throw new AppError("email or password are incorrect", 404)
            }

            const isPassCorrect = await bcrypt.compare(data.password, userExists.password)


            if (!isPassCorrect) {
                throw new AppError("email or password are incorrect", 404) 
            }

            const token = sign({}, process.env.JWT_SECRET, { subject: userExists.id,
                expiresIn: "1d"
            })

            const {password: _, ...user} = userExists

            return {status: 201, data: { message: "Login successfull",
            content: user,
            token: token
            }}

        } catch (error: any) {
            throw new AppError(error.message, 400)
        }
    }
}

