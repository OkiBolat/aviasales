import { createSlice } from '@reduxjs/toolkit';
import { getTicketsThunk } from './actions';

const toolkitSlice = createSlice({
  name: 'tickets',
  initialState: {
    filterParams: {
      stops: [],
      choice: '',
    },
    tickets: [],
    filteredTickets: [],
    requestInProgress: false,
  },
  reducers: {
    setTickets(state, action) {
      const newState = state;
      newState.tickets = [...action.payload]
      newState.filteredTickets = [...action.payload];
    },
    setTicketsByStops(state, action) {
      const newState = state;
      if(newState.filterParams.stops.includes(Number(action.payload))) {
        newState.filterParams.stops = newState.filterParams.stops.filter(val => val !== Number(action.payload))
      } else {
        newState.filterParams.stops.push(Number(action.payload))
      }
    },
    setTicketsByChoice(state, action) {
      const newState = state;
      newState.filterParams.choice = action.payload
      newState.filteredTickets.sort((a, b) => a.price - b.price)
    }
  },
  extraReducers: {
    [getTicketsThunk.pending]: (state) => {
      const newState = state;
      newState.requestInProgress = true;
    },
    [getTicketsThunk.fulfilled]: (state, action) => {
      const newState = state;
      newState.tickets = action.payload;
      newState.filteredTickets = action.payload;
      newState.requestInProgress = false;
    },
    [getTicketsThunk.rejected]: () => {
      console.error('Not response');
    },
  },
});


export const { setTickets, setTicketsByStops } = toolkitSlice.actions;

export default toolkitSlice.reducer;