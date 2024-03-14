import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MyTabs } from './TabNavigator';
import BookDetails from '../screens/BookDetails/BookDetails';
import Search from '../screens/Search/Search';


const Stack = createNativeStackNavigator();
function StackNavigator(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false }} >
        <Stack.Screen name="HomeScreen" component={MyTabs}/>
        <Stack.Screen name="BookDetails" component={BookDetails}/>
        <Stack.Screen name="Search" component={Search}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
