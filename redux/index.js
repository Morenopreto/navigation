import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import ActividadesReducer from "./reducers/actividades.reducer";

const RootReducer = combineReducers({
  actividades: ActividadesReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));
