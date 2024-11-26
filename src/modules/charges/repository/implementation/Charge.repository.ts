import { Repository } from "typeorm"
import { IChargeRepository } from "../IChargeRepository"
import { Charge } from "../../../../database/entities/Charge.entity"
import { AppDataSource } from "../../../../data-source"
import { ICreateChargeDTO } from "../../dtos/CreateCharge.dto"
import { IListChargesDTO } from "../../dtos/ListCharges.dto"

export class chargeRepository implements IChargeRepository {

    private repository: Repository<Charge>

    constructor() {
        this.repository = AppDataSource.getRepository(Charge)
    }

    async create(data: ICreateChargeDTO): Promise<void> {
        const charge = this.repository.create(data)

        await this.repository.save(charge)
    }
    async listAll(filter?: IListChargesDTO): Promise<Charge[]> {
        const query = this.repository.createQueryBuilder("charge");

        if (filter?.customerCpf) {
            query.andWhere("charge.customerCpf = :customerCpf", { customerCpf: filter.customerCpf });
        }
        if (filter?.description) {
            query.andWhere("charge.description LIKE :description", { description: `%${filter.description}%` });
        }
        if (filter?.chargeStatus) {
            query.andWhere("charge.chargeStatus = :chargeStatus", { chargeStatus: filter.chargeStatus });
        }
        if (filter?.chargeValue) {
            query.andWhere("charge.chargeValue = :chargeValue", { chargeValue: filter.chargeValue });
        }
        if (filter?.chargeDueDate) {
            query.andWhere("charge.chargeDueDate = :chargeDueDate", { chargeDueDate: filter.chargeDueDate });
        }

        const charges = await query.getMany();
        return charges;
    }
}