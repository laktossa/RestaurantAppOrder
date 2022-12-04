import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import CartScreen from "../Screens/CartScreen";
import HomeScreen from "../Screens/HomeScreen";

export default MainStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CartScreen"
          component={CartScreen}
          options={{ animation: "slide_from_bottom", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
