import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./TabNavigation";

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
}
