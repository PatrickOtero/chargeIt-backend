import { Customer } from "../../../database/entities/Customer.entity";
import { ICreateCustomerDTO } from "../dtos/CreateCustomer.dto";

export interface ICustomerRepository {
    create(data: ICreateCustomerDTO ): Promise<void>;
    listAll():Promise<Customer[]>;
    findByCpf(customerCpf: string):Promise<Customer>;
}