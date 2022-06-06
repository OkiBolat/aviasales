const { configureStore } = require('@reduxjs/toolkit');
const { default: rootReducer } = require('./reducers');

const store = configureStore({
  reducer: rootReducer,
});

export default store;