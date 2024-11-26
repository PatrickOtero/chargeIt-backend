import { container } from "tsyringe"
import { IUserRepository } from "../../modules/user/repository/IUserRepository"
import { UserRepository } from "../../modules/user/repository/implementations/User.repository"
import { ICustomerRepository } from "../../modules/customer/repository/ICustomerRepository"
import { CustomerRepository } from "../../modules/customer/repository/implementations/Customer.repository"
import { IChargeRepository } from "../../modules/charges/repository/IChargeRepository"
import { chargeRepository } from "../../modules/charges/repository/implementation/Charge.repository"

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
)

container.registerSingleton<ICustomerRepository>(
    "CustomerRepository",
    CustomerRepository
)

container.registerSingleton<IChargeRepository>(
    "ChargeRepository",
    chargeRepository
)