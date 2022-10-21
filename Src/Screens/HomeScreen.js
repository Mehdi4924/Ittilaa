import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../Components/CustomHeader';
import {hp, wp} from '../Constants/Responsive';
import {colors} from '../Constants/Colors';

export default function HomeScreen() {
  return (
    <View>
      <CustomHeader
        headerStyle={styles.headerStyle}
        leftImage={require('../Assets/Images/logo2.png')}
        leftImageStyle={{width: wp(50), height: hp(10)}}
        rightIconName='queue'
        rightIconType='material'
        rightIconColor={colors.white}
        rightIconSize={30}
        inputViewStyle={styles.inputViewStyle}
        textInputStyle={styles.textInputStyle}
        placeHolder='Search'
        

      />
      <Text>HomeScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    width: wp(100),
    height: hp(20),
    backgroundColor: colors.primary,
  },
  inputViewStyle:{
    flexDirection:'row',
    backgroundColor:colors.white,
    marginHorizontal:wp(5),
    borderRadius:5,
    alignItems:'center',
    paddingHorizontal:wp(2)
  },
  textInputStyle:{
    width:wp(75)
    
  }
});
