import * as React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {fonts} from '../../Constants/Fonts';
import {hp, wp} from '../../Constants/Responsive';
import {colors} from '../../Constants/Colors';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton';
import axios from 'axios';
import { useState } from 'react';
import { URL } from '../../Constants/URL';
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function Login(props) {
  const [phoneNumber, setPhoneNumber] = useState('646464');
  const [password, setPassword] = useState('1234');
  const [indicatorInd, setIndicatorInd] = useState(false);
  const [indicator, setIndicator] = useState(false);


  const Login = () => {
    setIndicatorInd(true);
    var data = new FormData();
    data.append('phone', phoneNumber);
    data.append('password',password);

    axios({
      method: "post",
      url: URL.baseURL+'auth/login',
      data: data,
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        //  JSON.parse(AsyncStorage.setItem('user'))
        props.navigation.navigate('BottomNavigator')
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response, null, 2);
      })
      .finally(function () {
        setIndicatorInd(false);
      });
    }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Welcome Back</Text>
        <Text style={styles.continueText}>Sign to Continue</Text>
        <CustomTextInput
          iconName={'mobile-phone'}
          iconType="font-awesome"
          topText="Phone"
          placeholder="Please Enter Number"
          value={phoneNumber}
          onChangeText={t => setPhoneNumber(t)}
          textInputContainer={{marginVertical: hp(2), marginTop: hp(4)}}
          keyboardType="phone-pad"

        />
        <CustomTextInput
          iconName={'lock'}
          iconType="font-awesome"
          placeholder="Please Enter Password"
          topText="Password"
          value={password}
          onChangeText={t => setPassword(t)}
          textInputContainer={{marginVertical: hp(1)}}
          iconSize={hp(4)}
          secureTextEntry={true}

        />
        <TouchableOpacity style={{width: wp(90), alignItems: 'flex-end'}}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <CustomButton
            btnText="Login"
            indicator={indicatorInd}
            onPress={Login}
            btnContainer={{marginTop: hp(20)}}
          />
          <Text style={styles.orText}>- OR -</Text>
          <CustomButton
            btnText="Register Your Agency"
            indicator={indicator}
            onPress={() => props.navigation.navigate('RegisterAgency')}
            btnContainer={styles.btnContainer}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  continueText: {fontFamily: fonts.regular, fontSize: hp(2), marginTop: hp(1)},
  welcomeText: {fontFamily: fonts.bold, fontSize: hp(2.5), marginTop: hp(20)},
  btnContainer: {
    backgroundColor: colors.secondary,
  },
  forgotText: {
    color: colors.primary,
    fontSize: hp(1.7),
    fontFamily: fonts.bold,
  },
  orText: {
    color: colors.secondary,
    fontFamily: fonts.regular,
    fontSize: hp(2.2),
    marginVertical: hp(2),
  },
});
