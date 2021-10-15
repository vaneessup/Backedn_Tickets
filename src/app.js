import express from "express"
import routeTickets from "./routes/tickets.routes"

const app = express()
app.use(express.json())
app.use("/Tickets", routeTickets)











//exportar aplicacion
export default app