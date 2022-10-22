import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../Constants/Responsive'

export default function Splash(props) {
  setTimeout(() => {navigateToConfirmation(props)}, 3000);
  return (

    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Image
      source={require('../../Assets/Images/logo.png')}
      style={{width:hp(40), height:hp(20)}}
      resizeMode='contain'
      />
    </View>
  )
 
}
const navigateToConfirmation =(props) =>(
  props.navigation.navigate('BottomNavigator')
  )

const styles = StyleSheet.create({})