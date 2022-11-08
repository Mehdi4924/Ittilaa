import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Inventories from '../Screens/AppFlow/Inventories';
import Classified from '../Screens/AppFlow/Classified';

export default function AppFlow() {
  const MainFlow = createNativeStackNavigator();
  return (
    <MainFlow.Navigator screenOptions={{headerShown: false}}>
      <MainFlow.Screen name="Classified" component={Classified} />
      <MainFlow.Screen name="Inventories" component={Inventories} />
    </MainFlow.Navigator>
  );
}
