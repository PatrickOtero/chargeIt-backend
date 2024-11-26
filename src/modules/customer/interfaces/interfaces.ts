import { IGlobalResponse } from "../../../shared/interfaces/GlobalInterfaces"
import { User } from "../../../database/entities/Customer.entity"

interface IUserResponseContent {
    message: string
    content?: User | Partial<User> | User[],
    token?: string
}

export interface IUserResponse extends IGlobalResponse {
    data: IUserResponseContent
}