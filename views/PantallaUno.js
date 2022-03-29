import { View, Text, StyleSheet, Image } from "react-native";
import Button from "../components/Button";
import style from "../styles/style";
import { useSelector } from "react-redux";

export default function PantallaUno() {
  const selectedActivity = useSelector((state) => state.actividades.selected);

  return (
    <View style={styles.container}>
      <View style={styles.imagenContainer}>
        <Image
          style={styles.imagen}
          source={{
            uri: selectedActivity?.imagenEvento,
          }}
        />
      </View>
      <Image
        style={styles.perfilImg}
        source={{
           uri: selectedActivity?.fotoPerfil,
        }}
      />
      {/* IMAGEN DE PERFIL */}
      <View style={styles.firstContainer}>
        <Text style={styles.clasificacion}>
          {selectedActivity.clasificacionEvento}
        </Text>
        <Text style={styles.nombreEvento}>{selectedActivity.nombreEvento}</Text>
      </View>
      <View style={styles.lugarFechaContainer}>
        <Text style={styles.lugarFecha}>{selectedActivity.lugarEvento}</Text>
        <Text style={styles.lugarFecha}>
          {selectedActivity?.diaEvento}, {selectedActivity?.horaEvento}
        </Text>
      </View>
      <View>
      <Text style={styles.lugarFecha}>
          {selectedActivity?.observaciones}
        </Text>
      </View>
      <Text>{selectedActivity.nombreCreador}</Text>
      <Text style={{ fontSize: 25 }}>ID EVENTO: {selectedActivity.id} </Text>
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
  imagenContainer: {
    width: "100%",
    height: "20%",
  },
  imagen: {
    margin: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
    resizeMode: "cover",
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
    position: "absolute",
    top: "13%",
    left: 20,
    alignSelf: "flex-start",
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    backgroundColor: "#43aa8b",
  },
  lugarFechaContainer: {
    width: "100%",
    height: "7%",
    justifyContent: "center",
    alignContent: "space-between",
    paddingLeft: 10,
  },
  lugarFecha: {
    color: "#7f7f7f",
  },
});
