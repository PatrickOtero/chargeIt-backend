import { Charge } from "../../../database/entities/Charge.entity";
import { ICreateChargeDTO } from "../dtos/CreateCharge.dto";

export interface IChargeRepository {
    create(data: ICreateChargeDTO ): Promise<void>;
    listAll():Promise<Charge[]>;
}