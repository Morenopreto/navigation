import React from "react";
import {View, Text } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PantallaTres from "../views/PantallaTres";
const Stack = createNativeStackNavigator();

export default SecondTabNavigation = () => {
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Segundo Tab"
        component={PantallaTres}
          options={{
          headerTintColor: '#1E4669' ,
          title: "Equipos",
        }}
      />
    </Stack.Navigator>
  );
};
