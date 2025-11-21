import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import FormScreen from "./screens/FormScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Lista de Tareas" }}
        />
        <Stack.Screen
          name="Form"
          component={FormScreen}
          options={{ title: "Formulario" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}