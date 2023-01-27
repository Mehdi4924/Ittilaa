import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {hp, wp} from '../../Constants/Responsive';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Splash(props) {
  useEffect(() => {
    navigateToConfirmation();
  }, []);
  const navigateToConfirmation = async () => {
    let userData = await AsyncStorage.getItem('AuthUser');
    let parseUser = JSON.parse(userData);
    // console.log('Async storage', parseUser);
    setTimeout(() => {
      if (userData == null) {
        props.navigation.replace('Login');
      } else {
        props.navigation.replace('BottomNavigator');
      }
    }, 3000);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image
        source={require('../../Assets/Images/logo.png')}
        style={{width: hp(44), height: hp(22)}}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({});
