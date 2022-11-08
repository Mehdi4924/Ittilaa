import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {wp} from '../Constants/Responsive';
import { colors } from '../Constants/Colors';

export default function CustomHeader(props) {
  return (
    <View style={props.headerStyle}>
      <View style={styles.iconContainer}>
        <Image
          source={props.leftImage}
          style={props.leftImageStyle}
          resizeMode="contain"
        />
        <Icon
          name={props.rightIconName}
          type={props.rightIconType}
          color={props.rightIconColor}
          size={props.rightIconSize}
        />
      </View>
      <View style={props.inputViewStyle}>
        <Icon
        name='search'
        type='material'
        color={colors.grey}
        size={30}
        />
        <TextInput style={props.textInputStyle}
        numberOfLine={1}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
  },
});
