import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export default function AppFlow() {
  const MainFlow = createNativeStackNavigator();
  return (
    <MainFlow.Navigator screenOptions={{headerShown: false}}>
    </MainFlow.Navigator>
  );
}
