import { sequelize } from "../config/db";
import { QueryTypes } from "sequelize";

//Interactuar con BD
const getAll = async () => {
  const records = await sequelize.query(
    "SELECT Depto_Id, Depto_Nombre FROM DevSolutions.dbo.Departamentos",
    {
      type: QueryTypes.SELECT,
    }
  );
  return records;
};

const insert = async (depto) => {
  const records = await sequelize.query(
    //`INSERT INTO DevSolutions.dbo.Departamentos (Depto_Nombre) VALUES('${depto.nombre}');`,
    "INSERT INTO DevSolutions.dbo.Departamentos (Depto_Nombre) OUTPUT Inserted.* VALUES(?);",
    {
      type: QueryTypes.INSERT,
      replacements: [depto.nombre],
    }
  );

  return records[0][0];
};

export { getAll, insert };
