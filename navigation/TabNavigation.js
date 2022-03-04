import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";


import SecondNavigator from "./SecondNavigator";
import FirstNavigator from "./FirstNavigator";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="First Tab"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="home"
                size={24}
                color={focused ? "blue" : "black"}
              />
            </View>
          ),
        }}
        component={FirstNavigator}
      />
      <Tab.Screen
        name="Second Tab"
        options={{
          tabBarLabel: "Equipo",
          tabBarIcon: ({ focused }) => (
            <View style={styles.item}>
              <AntDesign
                name="team"
                size={24}
                color={focused ? "blue" : "black"}
              />
            </View>
          ),
        }}
        component={SecondNavigator}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 25,
    left: 20,
    right: 20,
    borderRadius: 15,
    height: 70,
    shadowColor: "#ccc",
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 0.25,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 10,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
