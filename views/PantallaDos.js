import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import style from "../styles/style";
export default function PantallaDos({ navigation }) {
  const handleOnPress = () => {
    navigation.navigate("Detalle de Dos");
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Esta es la pantalla dos </Text>
      <Button
        style={style.outlined}
        title="ir a detalle"
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
