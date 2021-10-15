//Interactuar con BD
const getAll = () => {
  const tickets = [
    { id: 1, equipo: "Portatil", descripcion: "Actualizacion", tecnico: "Moi" },
    { id: 2, equipo: "Dell", descripcion: "Formatear", tecnico: "Dary" },
    { id: 3, equipo: "HP", descripcion: "Software", tecnico: "Juan" },
    { id: 4, equipo: "Mac", descripcion: "Instalacion", tecnico: "Vane" },
  ];
  return tickets;
};

const insert = (ticket) => {
    ticket.id = 7
    return ticket
}

export {getAll, insert} 

