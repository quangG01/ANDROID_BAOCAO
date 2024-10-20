// src/App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screens/screen1';
import Screen2 from './screens/screen2';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1">
        <Stack.Screen
          name="Screen1"
          component={Screen1}
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="Screen2"
          component={Screen2}
          options={{ title: 'Electronics' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
