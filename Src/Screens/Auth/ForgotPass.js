import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomTextInput from '../../Components/CustomTextInput';
import {colors} from '../../Constants/Colors';
import {fonts} from '../../Constants/Fonts';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import CustomButton from '../../Components/CustomButton';

export default function ForgotPass(props) {
  const [email, setEmail] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name={'arrow-back-circle'}
            type={'ionicon'}
            color={colors.primary}
            size={hp(5)}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Inventory Details</Text>
        <View style={{width: hp(5)}}></View>
      </View>
      <CustomTextInput
        iconName={'mail-bulk'}
        iconType="font-awesome-5"
        topText="Email"
        placeholder="Enter Email"
        value={email}
        onChangeText={t => setEmail(t)}
        textInputContainer={{marginTop: hp(8)}}
        iconSize={hp(3.5)}
        keyboardType="email-address"
      />
      
      <CustomButton
        btnText="Send"
        // indicator={indicator}
        onPress={()=>props.navigation.navigate('OTP')}
        btnContainer={{marginTop: hp(20)}}
      />
     <View style={{flexDirection: 'row', marginTop:hp(2)}}>
        <Text style={styles.text1}>Back to </Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
        <Text style={{...styles.text1, color:colors.primary}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    color: colors.black,
    fontFamily: fonts.bold,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(2),
  },
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  text1: {
    fontFamily: fonts.medium,
    color: colors.grey,
    fontSize: 14,
  },
});
