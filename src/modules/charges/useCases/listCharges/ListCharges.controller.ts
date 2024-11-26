import { Request, Response } from "express";
import listChargesValidationSchema from "../../validations/schemaListCharges";
import { container } from "tsyringe";
import { ListChargesUseCase } from "./ListCharges.usecase";
import { AppError } from "../../../../errors/appError";
import yup from "../../../../validator/configurations";


export class ListChargesController {
    async handle(req: Request, res: Response): Promise<Response> {
        try {
            await listChargesValidationSchema.validate(req.query, { abortEarly: false });

            const listChargesUseCase = container.resolve(ListChargesUseCase);
            const charges = await listChargesUseCase.execute(req.query);

            return res.status(200).json({ message: "Charges listed successfully", data: charges });
        } catch (error) {
            if (error instanceof yup.ValidationError) {
                throw new AppError(`${error.errors}`, 400);
            }

            throw new AppError(`Internal server error: ${error.message}`, 500);
        }
    }
}
