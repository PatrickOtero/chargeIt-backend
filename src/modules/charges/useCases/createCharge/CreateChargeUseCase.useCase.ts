import { inject, injectable } from "tsyringe"
import { ICreateChargeDTO } from "../../dtos/CreateCharge.dto"
import { IChargeRepository } from "../../repository/IChargeRepository"
import { ICustomerRepository } from "../../../customer/repository/ICustomerRepository"
import { AppError } from "../../../../errors/appError"

@injectable()
export class CreatechargeUseCase {
    constructor(
        @inject("ChargeRepository")
        private chargeRepository: IChargeRepository,
        @inject("CustomerRepository")
        private customerRepository: ICustomerRepository) {}

    async execute(data: ICreateChargeDTO): Promise<void> {
        const customerExists = await this.customerRepository.findByCpf(data.customerCpf)

        if (!customerExists) {
            throw new AppError("Customer does not exists")
        }

        data.customer_id = customerExists.id

        await this.chargeRepository.create(data)
    }
}