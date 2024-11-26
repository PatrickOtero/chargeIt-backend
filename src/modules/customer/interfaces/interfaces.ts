import { IGlobalResponse } from "../../../shared/interfaces/GlobalInterfaces"
import { Customer } from "../../../database/entities/Customer.entity"

interface ICustomerResponseContent {
    message: string
    content?: Customer | Partial<Customer> | Customer[],
    token?: string
}

export interface ICustomerResponse extends IGlobalResponse {
    data: ICustomerResponseContent
}