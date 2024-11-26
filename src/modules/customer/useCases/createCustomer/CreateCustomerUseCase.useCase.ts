import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../errors/appError";
import { ICustomerRepository } from "../../repository/ICustomerRepository";
import { ICreateCustomerDTO } from "../../dtos/CreateCustomer.dto";

@injectable()
export class CreateCustomerUseCase {
    constructor(
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository) {}

    async execute(data: ICreateCustomerDTO): Promise<void> {
        const customerExists = await this.customerRepository.findByCpf(data.customerCpf)

        if (customerExists) {
            throw new AppError("Customer already exists", 401)
        }

        await this.customerRepository.create(data)
    }
}