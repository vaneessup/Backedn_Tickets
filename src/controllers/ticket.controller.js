import * as ticketServices from "../services/tickets.services";

export const insert = (request, response) => {
  const ticket = {
    equipo: request.body.equipo,
    descripcion: request.body.descripcion,
    tecnico: request.body.tecnico,
  };
  const result = ticketServices.insert(ticket);
  response.json(result);
}; //función

export const update = (request, response) => {
  response.send("Update");
}; //función

export const getTickets = (request, response) => {
  console.log(request.query);
  console.log(request.params);
  console.log(request.headers);
  console.log(request.body);
  const result = ticketServices.getAll();
  response.json(result);
}; //función

export const deleteTicket = (request, response) => {
  response.send("Delete");
}; //función
