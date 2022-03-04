import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PantallaUno from "../views/PantallaUno";
import PantallaDos from "../views/PantallaDos";
import PantallaInicio from "../views/PantallaInicio";
import DetalleDos from "../views/DetalleDos";
import DetalleUno from "../views/DetalleUno";

const Stack = createNativeStackNavigator();

export default FirstNavigator = () => {


  return (
    <Stack.Navigator initialRouteName="PantallaInicio">
      <Stack.Screen
        name="Pantalla Inicio"
        component={PantallaInicio}
        options={{
          headerTintColor: "#1E4669",
          title: "Bienvenido!",
        }}
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
        name="Pantalla Dos"
        component={PantallaDos}
        options={{
          headerTintColor: "#1E4669",
          title: "Pantalla #2",
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
