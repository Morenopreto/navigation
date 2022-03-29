import { ACTIVIDADES } from "../../data/actividades";
import Actividades from "../../models/Actividades";
import { SELECT_ACTIVITY, ADD_ACTIVITY,LOAD_ACTIVITY } from "../actions/actividades.action";
// import Actividades from '../models/Actividades'

const INITIAL_STATE = {
  list: [
    {
      id: 1,
      creadorEvento: {
        nombreCreador: "Nicky",
        fotoPerfil:
          "https://tse4.mm.bing.net/th?id=OIP.RO6U0qe5IdH4VKU5hw2fBAHaHa&pid=Api&P=0&w=197&h=197",
      },
      diaEvento: "Hoy",
      horaEvento: "20:00",
      nombreEvento: "Ruka",
      lugarEvento: "Ruka Garden",
      clasificacionEvento: "Tranqui de noche",
      cantidadAsistentes: 10,
      observaciones:
        "We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread as a complete meal.",
      imagenEvento:
        "https://tse2.mm.bing.net/th?id=OIP.dKO3KAFRhhCDlFzH3tl5KAHaE7&pid=Api&P=0&w=253&h=169",
    },
  ],
  selected: null,
};

const ActividadesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECT_ACTIVITY:
      const index = state.list.findIndex((act) => act.id === action.activityID);
      if (index === -1) return state;

      return {
        ...state,
        selected: state.list[index],
      };
    case ADD_ACTIVITY:
      const activity = new Actividades(
        state.list.length+1,
        "El creador",
        "https://tse4.mm.bing.net/th?id=OIP.RO6U0qe5IdH4VKU5hw2fBAHaHa&pid=Api&P=0&w=197&h=197",
        "Hoy",
        "20:00",
        action.payload.title,
        "Evento creado con creador",
        "Tranqui de noche",
        10,
        "We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread as a complete meal.",
        action.payload.image
        // "https://tse2.mm.bing.net/th?id=OIP.dKO3KAFRhhCDlFzH3tl5KAHaE7&pid=Api&P=0&w=253&h=169"
      );

      return {
        ...state,
        list: state.list.concat(activity),
      };
      case LOAD_ACTIVITY:
        console.log('action')
        console.log(action)
        console.log('action')
        
        return {
            ...state,
            list: action.list,
        }
    default:
      return state;
  }
};

export default ActividadesReducer;
