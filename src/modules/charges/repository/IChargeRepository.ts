import { Charge } from "../../../database/entities/Charge.entity";
import { ICreateChargeDTO } from "../dtos/CreateCharge.dto";
import { IListChargesDTO } from "../dtos/ListCharges.dto";

export interface IChargeRepository {
    create(data: ICreateChargeDTO ): Promise<void>;
    listAll(filter?: IListChargesDTO): Promise<Charge[]>;
}