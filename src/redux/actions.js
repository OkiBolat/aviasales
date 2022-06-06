import { createAsyncThunk } from '@reduxjs/toolkit';
import { ticketsServices } from '../services/ticketsServices';


export const getTicketsThunk = createAsyncThunk('tickets/get', async () => {
  const response = await ticketsServices.getTickets();
  const data = await response.data;
  return data;
});
