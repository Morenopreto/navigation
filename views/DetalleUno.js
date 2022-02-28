import { View, Text, StyleSheet } from "react-native";

export default function DetalleUno() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalle pantalla uno</Text>
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
    fontSize: 20,
  },
});
