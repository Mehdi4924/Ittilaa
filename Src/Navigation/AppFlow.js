import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InventoryDetails from '../Screens/AppFlow/InventoryDetails';
import ClassifiedDetails from '../Screens/AppFlow/ClassifiedDetails';
import TopClassified from '../Screens/AppFlow/TopClassified';

export default function AppFlow() {
  const MainFlow = createNativeStackNavigator();
  return (
    <MainFlow.Navigator screenOptions={{headerShown: false}}>
      <MainFlow.Screen name="InventoryDetails" component={InventoryDetails} />
      <MainFlow.Screen name="ClassifiedDetails" component={ClassifiedDetails} />
      <MainFlow.Screen name="TopClassified" component={TopClassified} />
    </MainFlow.Navigator>
  );
}
