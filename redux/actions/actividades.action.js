export const SELECT_ACTIVITY = 'SELECT_ACTIVITY';
export const ADD_ACTIVITY = 'ADD_ACTIVITY';
import * as FileSystem from 'expo-file-system'

export const selectActivity = (id) => ({
  type: SELECT_ACTIVITY,
  activityID: id,
})



export const addActivity = (title, image) => {
    console.log(image)
    return async dispatch => {
        const filename = image.split('/').pop()
        const Path = FileSystem.documentDirectory + filename

        try {
            await FileSystem.moveAsync({
                from: image,
                to: Path,
            })

            dispatch({
                type: ADD_ACTIVITY,
                payload: {
                    title,
                    image: Path,
                }
            })
        } catch(err) {
            console.log(err)
            throw err;
        }
    } 
}