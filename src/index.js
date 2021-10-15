import app from "./app";
import { Sequelize, QueryTypes} from "sequelize";

// Option 2: Passing parameters separately (other dialects)
const sequelize = new Sequelize("DevSolutions", "sa", "yourStrong(!)Password", {
  host: "localhost",
  dialect: "mssql",
  port: 1433
});

async function conexionBD(params) {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    const records = await sequelize.query("INSERT INTO DevSolutions.dbo.Departamentos (Depto_Nombre) VALUES('Administracion');", {
      type: QueryTypes.INSERT
    });
    console.log(records)
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

}
conexionBD()
app.listen(3000, () => console.log("Hola Mundo")); //inicializar
