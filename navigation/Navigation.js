import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import PantallaUno from "../views/PantallaUno";
import PantallaDos from "../views/PantallaDos";
import PantallaInicio from "../views/PantallaInicio";
import DetalleDos from "../views/DetalleDos";
import DetalleUno from "../views/DetalleUno";

const Stack = createNativeStackNavigator();
export default Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PantallaInicio">
    
        <Stack.Screen name="Pantalla Inicio" component={PantallaInicio} />
        <Stack.Screen name="Pantalla Uno" component={PantallaUno} />
        <Stack.Screen name="Pantalla Dos" component={PantallaDos} />
        <Stack.Screen name="Detalle de Uno" component={DetalleUno} />
        <Stack.Screen name="Detalle de Dos" component={DetalleDos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
