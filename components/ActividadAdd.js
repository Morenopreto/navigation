import React, {useState} from "react";
import { useDispatch } from 'react-redux';
import { View, StyleSheet, ScrollView, Text,TextInput,Button } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { addActivity } from "../redux/actions/actividades.action";
import ImageSelector from "./ImageSelector";

function ActividadAdd({ navigation }) {
    const dispatch = useDispatch()
    const [title, setTitle] = useState();
    const [image, setImage] = useState();

    const handleSave = () => {
        dispatch(addActivity(title, image))
        navigation.navigate('Pantalla Inicio') // goBack
    }
  return (
    <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Nombre de evento</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={setTitle}
                />

                <ImageSelector onImageSelected={setImage} />

                <Button
                    title="GUARDAR"
                    color={styles.color}
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
  );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
    color:{
        backgroundColor:'blue'
    }
})


export default ActividadAdd;


