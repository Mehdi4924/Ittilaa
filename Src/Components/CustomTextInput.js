import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constants/Responsive';
import {fonts} from '../Constants/Fonts';
import {colors} from '../Constants/Colors';
import {Icon} from '@rneui/themed';
export default function CustomTextInput(props) {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.inputHeading}>Phone</Text>
      <View style={styles.textInputView}>
        <Icon
          name={props.iconName}
          type={props.iconType}
          color={colors.primary}
          size={hp(5)}
        />
        <TextInput
          placeholder={props.placeholder}
          value={props.value}
          placeholderTextColor={colors.grey}
          style={styles.textInputStyles}
          onChangeText={props.onChangeText}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textInputContainer: {
    width: wp(90),
    flex: 1 / 10,
    justifyContent: 'center',
    paddingHorizontal: wp(5),
    borderRadius: 5,
    borderWidth: 1,
  },
  inputHeading: {
    fontFamily: fonts.bold,
    position: 'absolute',
    top: -hp(2.4),
    left: wp(5),
    backgroundColor: colors.white,
    padding: 5,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInputStyles: {
    width: wp(70),
    fontFamily: fonts.regular,
  },
});
