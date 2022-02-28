import { View, Text, StyleSheet } from "react-native";

export default function DetalleDos() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Detalle pantalla dos</Text>
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
