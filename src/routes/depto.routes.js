import {Router} from "express"
import { getTickets, insert, update, deleteTicket } from "../controllers/depto.controller"
const router = Router()
router.get ("/", getTickets)
router.post ("/", insert)
router.put ("/", update)
router.delete ("/", deleteTicket)








export default router