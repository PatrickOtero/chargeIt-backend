import { Request, Response } from "express";
import { container } from "tsyringe";
import * as yup from "yup"
import chargeValidationSchema from "../../validations/schemaCreateCharge";
import { CreatechargeUseCase } from "./CreateChargeUseCase.useCase";

export class CreateChargeController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await chargeValidationSchema.validate(req.body, { abortEarly: false });

            const createChargeUseCase = container.resolve(CreatechargeUseCase);

            await createChargeUseCase.execute(req.body);

            return res.status(201).json({ message: "Charge created successfully"});
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
