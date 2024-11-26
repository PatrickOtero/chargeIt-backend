import { Router } from "express"
import { CreateUserController } from "../modules/user/useCases/createUser/CreateUserController.controller"
import { AuthenticateUserController } from "../modules/user/useCases/AuthenticateUser/authenticateUser.controller"

const userRouter = Router()

const createUserController = new CreateUserController()
const authenticateUser = new AuthenticateUserController()

userRouter.post("/", createUserController.handle)
userRouter.post("/login", authenticateUser.handle)

export { userRouter }