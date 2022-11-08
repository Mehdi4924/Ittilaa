import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Classified from '../Screens/BottomTab/Classified';
import HomeScreen from '../Screens/BottomTab/HomeScreen';
import Inventories from '../Screens/BottomTab/Inventories';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
        return (
          <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="Classified" component={Classified} />
            <Tab.Screen name="Inventories" component={Inventories} />
          </Tab.Navigator>
        );
      }

