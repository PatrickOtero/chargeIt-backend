import { Repository } from "typeorm"
import { ICustomerRepository } from "../ICustomerRepository"
import { Customer } from "../../../../database/entities/Customer.entity"
import { AppDataSource } from "../../../../data-source"
import { ICreateCustomerDTO } from "../../dtos/CreateCustomer.dto"

export class CustomerRepository implements ICustomerRepository {

    private repository: Repository<Customer>

    constructor() {
        this.repository = AppDataSource.getRepository(Customer)
    }

    async create(data: ICreateCustomerDTO): Promise<void> {
        const { customerName, customerEmail, customerPhone, customerCpf } = data

        const user = this.repository.create({
            customerName,
            customerEmail,
            customerCpf,
            customerPhone
        })

        await this.repository.save(user)
    }
    async listAll(): Promise<Customer[]> {
        const users = await this.repository.find();

        return users
    }

    async findByCpf(customerCpf: string): Promise<Customer> {
        const customer = await this.repository.findOne({ where: { customerCpf }})

        return customer
    }
}