import { Router } from "express"
import { CreateCustomerController } from "../modules/customer/useCases/createCustomer/CreateCustomerController.controller"

const customerRouter = Router()

const createCustomerController = new CreateCustomerController()

customerRouter.post("/", createCustomerController.handle)

export { customerRouter }