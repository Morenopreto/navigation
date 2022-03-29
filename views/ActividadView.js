import React, { useEffect } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";

import { useDispatch, useSelector } from "react-redux";

import { selectActivity } from "../redux/actions/actividades.action";
import Button from "../components/Button";
import style from "../styles/style";

import { loadEventos } from "../redux/actions/actividades.action";
import ActividadCard from "../components/ActividadCard";
// import { selectCategory } from '../store/actions/category.action';

export default function ActividadView({ navigation }) {
  const dispatch = useDispatch();
  const actividades = useSelector((state) => state.actividades.list);

  useEffect(() => {
    dispatch(loadEventos());
  }, []);

  const handleOnPress = (item) => {
    dispatch(selectActivity(item.id));

    navigation.navigate("Pantalla Uno");
  };

  const renderItem = ({ item }) => (
    <ActividadCard
      actividad={item}
      navigation={navigation}
      onPress={handleOnPress}
    />
  );

  return (
    // <SafeAreaView style={style.container}>
    <View style={styles.container}>
      <FlatList
        data={actividades}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {/* <Text style={styles.text}>Esta es la pantalla Inicio </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={style.outlined}
            title="Ir a Pantalla Uno"
            onPress={handlePressUno}
          />
          <Button
            style={style.outlined}
            title="Ir a Pantalla Dos"
            onPress={handlePressDos}
          />
        </View> */}
    </View>
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    fontSize: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "80%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    margin: 20,
  },
  button: {
    margin: 10,
    backgroundColor: "red",
  },
});
