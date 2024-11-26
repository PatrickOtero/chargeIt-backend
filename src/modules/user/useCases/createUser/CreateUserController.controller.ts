import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase.useCase";
import { container } from "tsyringe";
import userValidationSchema from "../../validations/schemaCreateUser";
import * as yup from "yup";

export class CreateUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await userValidationSchema.validate(req.body, { abortEarly: false });

            const createUserUseCase = container.resolve(CreateUserUseCase);

            await createUserUseCase.execute(req.body);

            return res.status(201).json({ message: "User created successfully"});
        } catch (error) {
            if (error instanceof yup.ValidationError) {

                return res.status(400).json({
                    message: 'Erro de validação',
                    errors: error.errors, 
                });
            }
            return res.status(500).json({
                message: 'Erro interno do servidor', error
            });
        }
    }
}
