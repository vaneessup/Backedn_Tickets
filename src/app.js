import express from "express"
import routeDepto from "./routes/depto.routes"

const app = express()
app.use(express.json())
app.use("/departamentos", routeDepto)

//exportar aplicacion
export default app