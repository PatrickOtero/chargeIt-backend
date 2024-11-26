import { Router } from "express"
import { CreateChargeController } from "../modules/charges/useCases/createCharge/CreateChargeController.controller"
import { ListChargesController } from "../modules/charges/useCases/listCharges/ListCharges.controller";

const chargeRouter = Router()

const createChargeController = new CreateChargeController()
const listChargesController = new ListChargesController();

chargeRouter.post("/", createChargeController.handle)
chargeRouter.get("/", listChargesController.handle);

export { chargeRouter }