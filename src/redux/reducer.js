import { createSlice } from '@reduxjs/toolkit';
import { SORT_TYPE } from '../constats';
import flightTimeCalculation from '../helpers/function/flightTimeCalculation';
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
    sortType: null,
    requestInProgress: false,
  },
  reducers: {
    setTicketsByStops(state, action) {
      const newState = state;
      if (newState.filterParams.stops.includes(Number(action.payload))) {
        newState.filterParams.stops = newState.filterParams.stops.filter(val => val !== Number(action.payload))
      } else {
        newState.filterParams.stops.push(Number(action.payload))
      }
    },
    addOption(state, action) {
      switch (action.payload) {
        case state.sortType:
          state.sortType = null;
          state.filteredTickets = state.tickets;
          return;
        case SORT_TYPE.FAST:
          state.filteredTickets = state.tickets.sort((a, b) => a.fullTimeThere.hours - b.fullTimeThere.hours);
          break;
        case SORT_TYPE.CHEAP:
          state.filteredTickets = state.filteredTickets.sort((a, b) => a.price - b.price);
          break;
        case SORT_TYPE.OPTIMAL:
          state.filteredTickets = state.filteredTickets.sort((a, b) => a.price - b.price);
          break;
        default:
        state.filteredTickets = state.tickets;
        state.sortType = null;
      }

      state.sortType = action.payload;
    }

  },
  extraReducers: {
    [getTicketsThunk.pending]: (state) => {
      state.requestInProgress = true;
    },
    [getTicketsThunk.fulfilled]: (state, action) => {
      state.tickets = [...state.tickets, ...flightTimeCalculation(action.payload)];
      state.filteredTickets = state.tickets;
      state.requestInProgress = false;
    },
    [getTicketsThunk.rejected]: () => {
      console.error('Not response');
    },
  },
});


export const { setTickets, setTicketsByStops, addOption } = toolkitSlice.actions;

export default toolkitSlice.reducer;