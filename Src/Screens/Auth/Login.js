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

export default function Login(props) {
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [password, setPassword] = React.useState('');
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
        />
        <TouchableOpacity style={{width: wp(90), alignItems: 'flex-end'}}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={{alignItems: 'center'}}>
          <CustomButton
            btnText="Login"
            indicator={false}
            onPress={() => props.navigation.navigate('BottomNavigator')}
            btnContainer={{marginTop: hp(20)}}
          />
          <Text style={styles.orText}>- OR -</Text>
          <CustomButton
            btnText="Register Your Agency"
            indicator={false}
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
