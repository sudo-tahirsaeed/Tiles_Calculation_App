import React from "react";
import Floor from "./screens/floor";
import Bath from "./screens/bath";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();
export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
       <Drawer.Navigator initialRouteName="Floor">
        <Drawer.Screen name="Floor" component={Floor}
        options={{
          unmountOnBlur: true,
          title: 'Floor',
          headerStyle: {
            backgroundColor: '#516a97',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            letterSpacing:1.2
          },
        }}
        
        />
        <Drawer.Screen name="Bathroom" component={Bath} 
         options={{
          unmountOnBlur: true,
          title: 'Bathroom',
          headerStyle: {
            // alignItems:'center',
            backgroundColor: '#516a97',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            letterSpacing:1.2
          },
        }}

        />
      </Drawer.Navigator>
    </NavigationContainer>
    // <Floor></Floor>
  );
}
