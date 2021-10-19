import { Sequelize, QueryTypes } from "sequelize";

// Option 2: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(
  "DevSolutions",
  "sa",
  "yourStrong(!)Password",
  {
    host: "localhost",
    dialect: "mssql",
    port: 1433,
  }
);

(async (params) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();
//conexionBD();
