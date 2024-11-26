import { Router } from "express"
import { CreateChargeController } from "../modules/charges/useCases/createCharge/CreateChargeController.controller"

const chargeRouter = Router()

const createChargeController = new CreateChargeController()

chargeRouter.post("/", createChargeController.handle)

export { chargeRouter }