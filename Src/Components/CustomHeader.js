import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {wp} from '../Constants/Responsive';
import {colors} from '../Constants/Colors';

export default function CustomHeader(props) {
  return (
    <View style={props.headerStyle}>
      <View style={props.iconContainer}>
        {props.leftImage ? (
          <Image
            source={props.leftImage}
            style={props.leftImageStyle}
            resizeMode="contain"
          />
        ) : null}
        <TouchableOpacity onPress={props.onLeftIconPress}>
          <Icon
            name={props.leftIconName}
            type={props.leftIconType}
            color={props.leftIconColor}
            size={props.leftIconSize}
          />
        </TouchableOpacity>
        <Text style={props.screenTitleStyle}>{props.screenTitle}</Text>
        <TouchableOpacity onPress={props.onRighttIconPress}>
          <Icon
            name={props.rightIconName}
            type={props.rightIconType}
            color={props.rightIconColor}
            size={props.rightIconSize}
          />
        </TouchableOpacity>
      </View>
      {!props.search ? (
        <View style={props.inputViewStyle}>
          <Icon name="search" type="material" color={colors.grey} size={30} />
          <TextInput
            style={props.textInputStyle}
            numberOfLine={1}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderTextColor}
            onChangeText={t => props.onChangeText(t)}
            value={props.value}
          />
        </View>
      ) : null}
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
