import { View, Text, StyleSheet } from "react-native";
import Button from "../components/Button";
import style from "../styles/style";
import { useSelector } from "react-redux";

export default function PantallaUno() {
  const selectedActivity = useSelector((state) => state.actividades.selected);

  return (
    <View style={styles.container}>
      <View style={styles.imagen}>
        <Text>Aqui va Imagen</Text>
      </View>
      <Text style={styles.perfilImg}>Perfil</Text>
      {/* IMAGEN DE PERFIL */}
      <View style={styles.firstContainer}>
        <Text style={styles.clasificacion}>
          {selectedActivity.clasificacionEvento}
        </Text>
        <Text style={styles.nombreEvento}>{selectedActivity.nombreEvento}</Text>
      </View>
      <View>
        <Text>{selectedActivity.lugarEvento}</Text>
        <Text>{selectedActivity.diaEvento}</Text>
      </View>
      <Text>{selectedActivity.creadorEvento}</Text>
      <Text style={{ fontSize: 25 }}>
        ID EVENTO: {selectedActivity.id}{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    alignItems: "center",
    margin: 0,
  },
  imagen: {
    margin: 0,
    width: "100%",
    height: "20%",
    backgroundColor: "grey",
  },
  nombreEvento: {
    width: "100%",
    // height: "25%",
    fontSize: 30,
    fontWeight: "bold",
    // backgroundColor: "red",
  },
  firstContainer: {
    width: "100%",
    height: "16%",
    paddingLeft: 30,
    marginBottom: 20,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  },
  clasificacion: {
    color: "#248277",
    fontWeight: "bold",
    fontSize: 15,
  },
  perfilImg: {
    width: 80,
    height: 80,
    position:'absolute',
    top:'13%',
    left:20,
    alignSelf:'flex-start',
    borderRadius: 150 / 2,
    overflow:'hidden',
    textAlign:'center',
    borderWidth: 3,
    backgroundColor:'blue'
  },
});
