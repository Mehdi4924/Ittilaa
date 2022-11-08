import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../Screens/Auth/Splash';
import Login from '../Screens/Auth/Login';
import RegisterAgency from '../Screens/Auth/RegisterAgency';
import HomeScreen from '../Screens/BottomTab/HomeScreen';

export default function AuthStack() {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      {/* <AuthStack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Splash" component={Splash} />
      <AuthStack.Screen name="RegisterAgency" component={RegisterAgency} />
    </AuthStack.Navigator>
  );
}

const styles = StyleSheet.create({});
