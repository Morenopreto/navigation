import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PantallaUno from "../views/PantallaUno";
import PantallaDos from "../views/PantallaDos";
import PantallaInicio from "../views/ActividadView";
import DetalleDos from "../views/DetalleDos";
import DetalleUno from "../views/DetalleUno";
import { TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ActividadAdd from "../components/ActividadAdd";
const Stack = createNativeStackNavigator();

export default FirstNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="PantallaInicio">
      <Stack.Screen
        name="Pantalla Inicio"
        component={PantallaInicio}
        options={({ navigation }) => ({
          headerTintColor: "#1E4669",
          title: "Ke onda",
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Actividad Add')}>
            {/* <TouchableOpacity onPress={() => {}}> */}
              <Ionicons
                name="md-add"
                color={Platform.OS === "android" ? "black" : "red"}
                size={24}
              />
              <Text>Crear Evento</Text>
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Pantalla Uno"
        component={PantallaUno}
        options={{
          headerTintColor: "#1E4669",
          title: "Pantalla #1",
        }}
      />
      <Stack.Screen
        name="Actividad Add"
        component={ActividadAdd}
        options={{
          headerTintColor: "#1E4669",
          title: "Crea tu evento!",
        }}
      />
      <Stack.Screen
        name="Detalle de Uno"
        component={DetalleUno}
        options={{
          headerTintColor: "#1E4669",
          title: "Detalle de #1",
        }}
      />
      <Stack.Screen
        name="Detalle de Dos"
        component={DetalleDos}
        options={{
          headerTintColor: "#1E4669",
          title: "Detalle de #2",
        }}
      />
    </Stack.Navigator>
  );
};
