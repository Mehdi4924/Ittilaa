import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../Components/CustomHeader';
import {hp, wp} from '../Constants/Responsive';
import {colors} from '../Constants/Colors';
import { allImages } from '../Constants/Images';

export default function HomeScreen(props) {
  // console.log(props);
  return (
    <View>
      <CustomHeader
        headerStyle={styles.headerStyle}
        leftImage={allImages.logo1}
        leftImageStyle={{width: wp(50), height: hp(10)}}
        rightIconName='queue'
        rightIconType='material'
        rightIconColor={colors.white}
        rightIconSize={30}
        inputViewStyle={styles.inputViewStyle}
        textInputStyle={styles.textInputStyle}
        placeHolder='Search'
        

      />
      <Text onPress={()=> props.navigation.navigate("AppFlow")}>HomeScreen</Text>
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
