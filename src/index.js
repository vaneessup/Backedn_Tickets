console.log("Que ondas")
import express from "express"
const app = express()
app.get("/prueba", (request, response)=> {response.send("Yo soy tu padre")})




app.listen(3000, ()=> console.log("Hola Mundo") )
