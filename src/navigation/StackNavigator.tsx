import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTabs } from './TabNavigator';


const Stack = createNativeStackNavigator();
function StackNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} >
        <Stack.Screen name="HomeScreen" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
