import { Router } from "express"
import { userRouter } from "./User.routes"
import { customerRouter } from "./Customer.routes"
import { chargeRouter } from "./Charge.routes"

const router = Router()

router.use("/user", userRouter)
router.use("/charge", chargeRouter)
router.use("/customer", customerRouter)

export { router }