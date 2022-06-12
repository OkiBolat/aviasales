import instance from './instance';

const ticketsServices = {
  getTickets : (pages) => instance(`?page=${pages}&limit=5`),
}


export default ticketsServices;