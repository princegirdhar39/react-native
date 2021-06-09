  import React from "react";
// import { View, Text, SafeAreaView, StyleSheet , FlatList} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import ColorPalette from './screens/ColorPalette';
import Home from './screens/Home';
import {createStackNavigator} from '@react-navigation/stack';




const Stack = createStackNavigator();




const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ColorPalette" component={ColorPalette} />


      </Stack.Navigator>




 
    </NavigationContainer>
  );
};


export default App;

