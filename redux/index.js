import { createStore, combineReducers } from 'redux';

import ActividadesReducer from './reducers/actividades.reducer';

const RootReducer = combineReducers({
  actividades: ActividadesReducer,
})

export default createStore(RootReducer);