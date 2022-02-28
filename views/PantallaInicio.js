import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import style from "../styles/style";

export default function PantallaInicio({ navigation }) {
  const handlePressUno = () => {
    navigation.navigate("Pantalla Uno");
  };
  const handlePressDos = () => {
    navigation.navigate("Pantalla Dos");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Esta es la pantalla Inicio </Text>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
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
