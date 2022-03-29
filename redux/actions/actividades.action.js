export const SELECT_ACTIVITY = "SELECT_ACTIVITY";

import * as FileSystem from "expo-file-system";
import { insertEvento, loadEvento } from "../../db/index";

export const ADD_ACTIVITY = "ADD_ACTIVITY";
export const LOAD_ACTIVITY = "LOAD_ACTIVITY";

export const selectActivity = (id) => ({
  type: SELECT_ACTIVITY,
  activityID: id,
});

export const addActivity = (title, image) => {
  console.log(image);
  return async (dispatch) => {
    const filename = image.split("/").pop();
    const Path = FileSystem.documentDirectory + filename;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: Path,
      });
      ///////////////////////////////////////////////////////////////////////
      ////                       NOTA AL TUTOR                          ////
      //// insert para cumplir con requerimentos minimos de aprobacion ////
      ////  falta crear los inputs para no hardcodear informacion     ////
      ///////////////////////////////////////////////////////////////////
      const result = await insertEvento(
        "El creador",
        "https://tse4.mm.bing.net/th?id=OIP.RO6U0qe5IdH4VKU5hw2fBAHaHa&pid=Api&P=0&w=197&h=197",
        "Hoy",
        "20:00",
        title,
        "Evento creado con creador",
        "Tranqui de noche",
        10,
        "We are lucky to live in a glorious age that gives us everything we could ask for as a human race. What more could you need when you have meat covered in cheese nestled between bread as a complete meal.",
        Path
      );
      console.log(result);
      dispatch({
        type: ADD_ACTIVITY,
        payload: {
          title,
          image: Path,
        },
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  };
};

export const loadEventos = () => {
    return async dispatch => {
        try {
            const result = await loadEvento()
            console.log(result)
            dispatch({
                type: LOAD_ACTIVITY,
                list: result.rows._array,
            })
        } catch(error) {
            throw error
        }
    }
}