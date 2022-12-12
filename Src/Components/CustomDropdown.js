import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {colors} from '../Constants/Colors';
import {fonts} from '../Constants/Fonts';
import {hp, wp} from '../Constants/Responsive';

const data = [
  {label: 'Lahore', value: '1'},
  {label: 'Multan', value: '2'},
  {label: 'Karachi', value: '3'},
  {label: 'Islamabad', value: '4'},
];

const CustomDropdown = props => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && {color: colors.primary}]}>
        {props.label}
      </Text>
    );
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[props.dropdown?props.dropdown:styles.dropdown, isFocus && {borderColor: colors.primary}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={props.data}
        search={!!props.search?true:false}
        fontFamily={fonts.regular}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? props.placeholder : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={props.onChange?props.onChange:item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            name={props.leftIconName}
            type={props.leftIconType}
            color={props.leftIconColor ? props.leftIconColor : colors.primary}
            size={props.leftIconSize}
            style={{marginHorizontal: 5}}
          />
        )}
      />
    </View>
  );
};

export default CustomDropdown;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.tertiary,
    marginTop: hp(4),
  },
  dropdown: {
    height: hp(7),
    width: wp(90),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: colors.tertiary,
    left: wp(8),
    top: -hp(1.5),
    zIndex: 999,
    paddingHorizontal: 8,
    fontFamily: fonts.regular,
    fontSize: hp(2),
  },
  placeholderStyle: {
    fontSize: hp(2),
    fontFamily: fonts.regular,
  },
  selectedTextStyle: {
    fontSize: hp(2),
    fontFamily: fonts.regular,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: hp(2),
  },
});
