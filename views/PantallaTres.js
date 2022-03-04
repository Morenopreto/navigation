import { View, Text, StyleSheet } from "react-native";


export default function PantallaTres() {
  
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 25 }}>Esta es la pantalla tres </Text>
   
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
