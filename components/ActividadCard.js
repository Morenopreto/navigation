import React from "react";
import { View, StyleSheet, Pressable, Text,Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

function ActividadCard({ navigation, style, children, actividad, onPress }) {
  console.log(actividad)
  return (
    <Pressable onPress={() => onPress(actividad)}>
      <View style={{ ...styles.cardContainer, ...style }}>
        {/* <View style={styles.imagenContainer}>
          <Text>Esto es imagen</Text>
        </View> */}
        <View style={styles.imagenContainer}>
          <Image
            style={styles.imagen}
            source={{
              uri: actividad?.imagenEvento,
            }}
          />
          <Image
        style={styles.perfilImg}
        source={{
          // uri: actividad?.creadorEvento.fotoPerfil,
          uri: actividad?.fotoPerfil,
        }}
      />
        </View>
        <View style={styles.infoContainer}>
          <View style={styles.clasificacionContainer}>
            <Text style={styles.clasificacion}>
              {actividad?.clasificacionEvento}
            </Text>
          </View>
          <View style={styles.activityContainer}>
            <Ionicons name="share-social-sharp" size={24} color="black" />
            <AntDesign name="hearto" size={24} color="black" />
          </View>

          <Text style={styles.nombreEvento}>{actividad?.nombreEvento}</Text>

          <View style={styles.lugarFechaContainer}>
            <Text style={styles.lugarFecha}>{actividad?.lugarEvento}</Text>
            <Text style={styles.lugarFecha}>
              {actividad?.diaEvento}, {actividad?.horaEvento}
            </Text>
          </View>
          <View style={styles.respuestasContainer}>
            <Pressable onPress={() => {}}>
              <Text style={{ ...styles.respuestas, ...styles.estoyRespuesta }}>
                Estoy
              </Text>
            </Pressable>

            <Pressable onPress={() => {}}>
              <Text style={styles.respuestas}>No Estoy</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "90%",
    height: 330,
    overflow: "hidden",
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.32,
    shadowRadius: 2.62,
    elevation: 5,
    backgroundColor: "white",
    //no mostrar lo que sobresale
  },
  imagenContainer: {
    width: "100%",
    height: "40%",
    // height:100,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  }, imagen: {
    margin: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "grey",
    resizeMode:'cover'
  },perfilImg: {
    width: 65,
    height: 65,
    position: "absolute",
    top: "12%",
    left: 20,
    alignSelf: "flex-start",
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,
    backgroundColor: "#43aa8b",
  },
  infoContainer: {
    width: "100%",
    height: "60%",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  clasificacionContainer: {
    width: "60%",
    // backgroundColor:'red',
    height: "25%",
    paddingLeft: 10,
    justifyContent: "center",
  },
  clasificacion: {
    color: "#248277",
    fontWeight: "bold",
    fontSize: 15,
  },
  activityContainer: {
    width: "40%",
    height: "25%",
    paddingLeft: 20,
    paddingRight: 20,
    // backgroundColor: "green",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  nombreEvento: {
    width: "100%",
    height: "20%",
    fontSize: 30,
    fontWeight: "bold",
    paddingLeft: 10,
    // backgroundColor: "red",
  },
  lugarFechaContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignContent: "space-between",
    paddingLeft: 10,
  },
  respuestasContainer: {
    width: "100%",
    height: "25%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingRight: 40,
    flexDirection: "row",
  },
  respuestas: {
    color: "#248277",
    fontWeight: "bold",
    fontSize: 20,
  },
  estoyRespuesta: {
    marginRight: 30,
  },
  lugarFecha: {
    color: "#7f7f7f",
  },
});

export default ActividadCard;

//25 20 30
