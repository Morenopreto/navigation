import { ACTIVIDADES } from '../../data/actividades';
import { SELECT_ACTIVITY } from '../actions/actividades.action';

const INITIAL_STATE = {
  list: ACTIVIDADES,
  selected: null,
}

const ActividadesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SELECT_ACTIVITY:
          const index = state.list.findIndex(act =>act.id === action.activityID)
          if (index === -1) return state;
    
          return {
            ...state,
            selected: state.list[index],
          }
        default:
          return state;
      }
}

export default ActividadesReducer;