import { Request, Response } from "express";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase.useCase";
import { container } from "tsyringe";
import * as yup from "yup";
import createCustomerValidationSchema from "../../validations/schemaCreateCustomer";

export class CreateCustomerController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await createCustomerValidationSchema.validate(req.body, { abortEarly: false });

            const createCustomerUseCase = container.resolve(CreateCustomerUseCase);

            await createCustomerUseCase.execute(req.body);

            return res.status(201).json({ message: "Customer created successfully"});
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
