import ticketsSlice from './reducer';

const { combineReducers } = require('@reduxjs/toolkit');

const rootReducer = combineReducers({
  tickets: ticketsSlice,

});

export default rootReducer;