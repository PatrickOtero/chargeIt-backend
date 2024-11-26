import { Request, Response } from "express";
import { container } from "tsyringe";
import * as yup from "yup"
import chargeValidationSchema from "../../validations/schemaCreateCharge";
import { CreatechargeUseCase } from "./CreateChargeUseCase.useCase";
import { AppError } from "../../../../errors/appError";

export class CreateChargeController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await chargeValidationSchema.validate(req.body, { abortEarly: false });

            const createChargeUseCase = container.resolve(CreatechargeUseCase);

            await createChargeUseCase.execute(req.body);

            return res.status(201).json({ message: "Charge created successfully"});
        } catch (error) {
            if (error instanceof yup.ValidationError) {

                throw new AppError(`Erro de validação ${error.errors}`)
            }
                throw new AppError(`Erro interno do servidor ${error.message}`)
        }
    }
}
