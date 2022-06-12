import { createAsyncThunk } from '@reduxjs/toolkit';
import ticketsServices from '../services/ticketsServices';


export const getTicketsThunk = createAsyncThunk('tickets/get', async (page) => {
  const response = await ticketsServices.getTickets(page)
  const { data } = response;
  return data;
});

