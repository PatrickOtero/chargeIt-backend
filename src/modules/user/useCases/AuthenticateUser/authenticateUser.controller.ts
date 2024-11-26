import { Request, Response } from "express";
import { container } from "tsyringe";
import { AuthenticateUserUseCase } from "./authenticateUser.usecase";
import schemaLogin from "../../validations/login";
import { AppError } from "../../../../errors/appError";

export class AuthenticateUserController {
    async handle(req: Request, res: Response): Promise<Response> {

        const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase)

        try {
            await schemaLogin.validate(req.body)
        }
        catch (error: any) {
            throw new AppError(error.message, 400)
        }

        const { status, data } = await authenticateUserUseCase.execute(req.body)

        return res.status(status).json(data)
    }
}