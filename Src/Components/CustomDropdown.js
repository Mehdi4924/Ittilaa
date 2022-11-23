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

const CustomDropdown = () => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => {
    return (
      <Text style={[styles.label, isFocus && {color: colors.primary}]}>
        City{' '}
      </Text>
    );
    return null;
  };

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown, isFocus && {borderColor: colors.primary}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        fontFamily={fonts.regular}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select City' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <Icon
            name={'location'}
            type={'ionicon'}
            color={colors.primary}
            size={hp(3)}
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
