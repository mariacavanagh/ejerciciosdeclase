import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import AntDesign from '@expo/vector-icons/AntDesign';
const Tab = createBottomTabNavigator();


export default function HomeMenu() {
  return (
    <Tab.Navigator screenOptions={{tabBarShowLabel: false}}>
      <Tab.Screen name="Home" component={Home} options={ 
        {tabBarIcon: ()=> <AntDesign name="coffee" size={24} color="black" />}} />
      <Tab.Screen name="Profile" component={Profile} options={ 
        {tabBarIcon: ()=><AntDesign name="amazon" size={24} color="black" />} } />
    </Tab.Navigator>
  );
}