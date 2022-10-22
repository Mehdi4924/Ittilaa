import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import HomeScreen from '../Screens/HomeScreen';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
        return (
          <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
          </Tab.Navigator>
        );
      }

