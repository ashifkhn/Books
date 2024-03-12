import React from 'react';
import { createBottomTabNavigator, BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home/Home';
import Wallet from '../screens/Wallet/Wallet';
import { scale } from '../utils/utils';
import StyleConfig from '../utils/StyleConfig';

type RootTabParamList = {
  Home: undefined;
  Wallet: undefined;
  Guide: undefined;
  Chart: undefined;
};

type TabScreenProps<T extends keyof RootTabParamList> = {
  navigation: BottomTabNavigationProp<RootTabParamList, T>;
  route: RouteProp<RootTabParamList, T>;
};

const Tab = createBottomTabNavigator();

type TabBarOptions = {
  activeTintColor: string;
  inactiveTintColor: string;
};

export function MyTabs() {
  const tabBarOptions: TabBarOptions = {
    activeTintColor: StyleConfig.colors.primary,
    inactiveTintColor: 'gray',
    
  };
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown:false,
        tabBarActiveTintColor:StyleConfig.colors.primary,
        tabBarActiveBackgroundColor:StyleConfig.colors.white,
        tabBarInactiveBackgroundColor:StyleConfig.colors.white,
        tabBarStyle: {
          height:scale(60),
          borderTopRightRadius:25,
          borderTopLeftRadius:25,
          paddingBottom:scale(5),
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Flights') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Bookings') {
            iconName = focused ? 'wallet' : 'wallet-outline';
          } 
          return <Icon name={iconName} size={28} color={StyleConfig.colors.primary} />;
        },
      })}
    >
      <Tab.Screen name="Flights" component={Home} />
      <Tab.Screen name="Bookings" component={Wallet} />
      {/* <Tab.Screen name="Guide" component={GuideTabs} /> */}
    </Tab.Navigator>
  );
}
