import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./navigation/index";
import { Provider } from "react-redux";
import store from './redux';


import { init } from './db/index.js';

init()
  .then(() => { console.log('Database initialized') })
  .catch((err) => {
    console.log('Database failed to connect')
    console.log(err.message)
  })



export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
