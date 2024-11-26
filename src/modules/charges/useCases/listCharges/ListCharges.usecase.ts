import { inject, injectable } from "tsyringe";
import { Charge } from "../../../../database/entities/Charge.entity";
import { IChargeRepository } from "../../repository/IChargeRepository";
import { IListChargesDTO } from "../../dtos/ListCharges.dto";

@injectable()
export class ListChargesUseCase {
    constructor(
        @inject("ChargeRepository")
        private chargeRepository: IChargeRepository
    ) {}

    async execute(filter?: IListChargesDTO): Promise<Charge[]> {
        const charges = await this.chargeRepository.listAll(filter);
        return charges;
    }
}