import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../Components/CustomHeader';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';

export default function AddInventoriesClassified(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'},
  ]);
  return (
    <View style={styles.mainContainer}>
      <CustomHeader
        headerStyle={styles.headerStyle}
        iconContainer={styles.iconContainer}
        leftIconName="arrow-back"
        leftIconType="material"
        leftIconColor={colors.white}
        leftIconSize={30}
        onLeftIconPress={() => props.navigation.goBack()}
        screenTitle="Add Inventories/Classified"
        screenTitleStyle={styles.screenTitleStyle}
      />
      <View style={styles.invClassBtnContainer}>
        <CustomButton
          btnContainer={styles.inventBtnContainer}
          btnText="Inventories"
          btnTextStyles={styles.btnTextStyles}
        />
        <CustomButton
          btnContainer={styles.classiBtnContainer}
          btnText="Inventories"
          btnTextStyles={styles.btnTextStyles}
        />
      </View>
      <CustomTextInput
      textInputContainer={{marginTop:hp(3)}}
        topText="City"
        iconType="materiat"
        iconName="place"
        iconSize={30}
        placeholder="Select City"
        
      />
      <CustomTextInput
      textInputContainer={{marginTop:hp(3)}}
        topText="City"
        iconType="materiat"
        iconName="place"
        iconSize={30}
        placeholder="Select City"
        dorpdown={true}
        open={open}
        dropValue={value}
        dropItems={items}
        setDropOpen={setOpen}
        setDropValue={setValue}
        setDropItems={setItems}
      />
     
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.tertiary,
  },
  headerStyle: {
    width: wp(100),
    height: hp(12),
    backgroundColor: colors.primary,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
    marginTop: hp(4),
  },
  screenTitleStyle: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.4),
    color: colors.white,
  },
  invClassBtnContainer: {
    flexDirection: 'row',
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: hp(3),
  },
  inventBtnContainer: {
    width: wp(36),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  btnTextStyles: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.5),
    color: colors.white,
  },
  classiBtnContainer: {
    width: wp(36),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    borderRadius: 5,
  },
});
