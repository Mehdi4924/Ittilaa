import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TopClassified from '../Components/TopClassified';

export default function UserFlow() {
  const UserStack = createNativeStackNavigator();
  return (
    <UserStack.Navigator screenOptions={{headerShown: false}}>
      <UserStack.Screen name="TopClassified" component={TopClassified} />

    </UserStack.Navigator>
  );
}

const styles = StyleSheet.create({});
