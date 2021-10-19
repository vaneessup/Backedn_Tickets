import * as deptoServices from "../services/depto.services";

export const insert = async (request, response) => {
  const depto = {
    nombre: request.body.nombre,
  };

  const result = await deptoServices.insert(depto);
  console.log("Valor: ", result);
  response.json(result);
}; //función

export const update = (request, response) => {
  response.send("Update");
}; //función

export const getTickets = async (request, response) => {
  /*  console.log(request.query);
  console.log(request.params);
  console.log(request.headers);
  console.log(request.body); */
  const result = await deptoServices.getAll();
  response.json(result);
}; //función

export const deleteTicket = (request, response) => {
  response.send("Delete");
}; //función
