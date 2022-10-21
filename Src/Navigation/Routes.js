import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import BottomNavigator from './BottomNavigator';

export default function Routes() {
  const MainStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="AuthStack" component={AuthStack} />
        <MainStack.Screen name="BottomNavigator" component={BottomNavigator} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
