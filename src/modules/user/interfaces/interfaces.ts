import { IGlobalResponse } from "../../../shared/interfaces/GlobalInterfaces"
import { User } from "../../../database/entities/User.entity"

interface IUserResponseContent {
    message: string
    content?: User | Partial<User> | User[],
    token?: string
}

export interface IUserResponse extends IGlobalResponse {
    data: IUserResponseContent
}