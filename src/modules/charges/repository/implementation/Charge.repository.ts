import { Repository } from "typeorm"
import { IChargeRepository } from "../IChargeRepository"
import { Charge } from "../../../../database/entities/Charge.entity"
import { AppDataSource } from "../../../../data-source"
import { ICreateChargeDTO } from "../../dtos/CreateCharge.dto"

export class chargeRepository implements IChargeRepository {

    private repository: Repository<Charge>

    constructor() {
        this.repository = AppDataSource.getRepository(Charge)
    }

    async create(data: ICreateChargeDTO): Promise<void> {
        const charge = this.repository.create(data)

        await this.repository.save(charge)
    }
    async listAll(): Promise<Charge[]> {
        const charges = await this.repository.find();

        return charges
    }
}