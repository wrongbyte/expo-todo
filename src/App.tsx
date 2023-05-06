import * as React from "react";
import TaskList from "./pages/TaskList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TaskList" component={TaskList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
