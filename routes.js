import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '~/screens/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Routes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
