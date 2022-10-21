import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fonts} from '../../Constants/Fonts';
import {hp} from '../../Constants/Responsive';
import {colors} from '../../Constants/Colors';
// import CustomTextInput from '../../Components/CustomTextInput';

export default function Login() {
  return (
    <View style={styles.container}>
      <Text
        style={{fontFamily: fonts.bold, fontSize: hp(2.5), marginTop: hp(10)}}>
        Welcome Back
      </Text>
      <Text
        style={{fontFamily: fonts.regular, fontSize: hp(2), marginTop: hp(2)}}>
        Sign to Continue
      </Text>
      {/* <CustomTextInput /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
});
