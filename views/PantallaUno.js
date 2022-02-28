import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import style from "../styles/style";

export default function PantallaUno({ navigation }) {
  const handleOnPress = () => {
    navigation.navigate("Detalle de Uno");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Esta es la pantalla uno </Text>
      <Button
        style={style.outlined}
        title="Ir a detalle"
        onPress={handleOnPress}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
