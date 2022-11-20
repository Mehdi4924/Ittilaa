import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../Components/CustomHeader';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import {cityItem, societyItem, typeItem} from '../../Constants/dummyData';

export default function AddInventoriesClassified(props) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [socValue, setSocValue] = useState(null);
  const [socOpen, setSocOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [typeValue, setTypeValue] = useState(null);
  const [cityItems, setCityItems] = useState(cityItem);
  const [socItems, setSocItems] = useState(societyItem);
  const [typeItems, setTypeItems] = useState(typeItem);
  const [inventory, setInventory] = useState(true);
  const [classify, setClassify] = useState(false);
  const [priceType, setPriceType] = useState(true);
  const [adType, setAdType] = useState(true);
  return (
    <View style={styles.mainContainer}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}>
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
            btnContainer={
              inventory ? styles.activeBtnStyle : styles.inactiveBtnStyle
            }
            btnText="Inventories"
            btnTextStyles={styles.btnTextStyles}
            onPress={() => {
              setInventory(true), setClassify(false);
            }}
          />
          <CustomButton
            btnContainer={
              classify ? styles.activeBtnStyle : styles.inactiveBtnStyle
            }
            btnText="Classified"
            btnTextStyles={styles.btnTextStyles}
            onPress={() => {
              setInventory(false), setClassify(true);
            }}
          />
        </View>
        {inventory ? (
          <View>
            <CustomTextInput
              textInputContainer={{marginTop: hp(3)}}
              topText="City"
              iconType="material"
              iconName="place"
              iconSize={26}
              dorpdown={true}
              dorpdownPlaceholder="Select City"
              open={open}
              dropValue={value}
              dropItems={cityItems}
              setDropOpen={setOpen}
              setDropValue={setValue}
              setDropItems={setCityItems}
            />
            <CustomTextInput
              textInputContainer={{marginTop: hp(3)}}
              topText="Society"
              iconType="material"
              iconName="groups"
              iconSize={30}
              dorpdown={true}
              dorpdownPlaceholder="Select Society"
              open={socOpen}
              dropValue={socValue}
              dropItems={socItems}
              setDropOpen={setSocOpen}
              setDropValue={setSocValue}
              setDropItems={setSocItems}
            />
            <CustomTextInput
              textInputContainer={{marginTop: hp(3)}}
              topText="Type"
              iconType="material"
              iconName="merge-type"
              iconSize={30}
              dorpdown={true}
              dorpdownPlaceholder="Select Type"
              open={typeOpen}
              dropValue={typeValue}
              dropItems={typeItems}
              setDropOpen={setTypeOpen}
              setDropValue={setTypeValue}
              setDropItems={setTypeItems}
            />
            <CustomTextInput
              textInputContainer={{marginTop: hp(3)}}
              topText="Price"
              iconType="material"
              iconName="local-offer"
              iconSize={26}
              placeholder="Enter Price PKR"
            />
            <CustomTextInput
              topText="Details"
              iconType="material"
              iconName="info"
              iconSize={26}
              placeholder="Enter Price PKR"
              textInputContainer={styles.textInputContainer}
              textInputStyles={styles.textInputStyles}
              iconStyles={styles.iconStyles}
              multiline={true}
              textInputView={styles.textInputView}
            />
          </View>
        ) : (
          <View>
            <CustomTextInput
              textInputContainer={{marginTop: hp(3)}}
              topText="Plot No."
              iconType="material"
              iconName="local-offer"
              iconSize={26}
              placeholder="Enter Plot Number"
            />
            <CustomTextInput
              textInputContainer={{marginTop: hp(3)}}
              topText="Block"
              iconType="material"
              iconName="local-offer"
              iconSize={26}
              placeholder="Enter Block"
            />
            <View style={styles.priceTypeContainer}>
              <CustomTextInput
                topText="Block"
                iconType="material"
                iconName="local-offer"
                iconSize={26}
                placeholder="Enter Block"
                textInputContainer={styles.priceTextInputContainer}
                textInputStyles={styles.priceTextInputStyles}
                textInputView={styles.priceTextInputView}
              />
              <TouchableOpacity
                style={
                  priceType ? styles.priceTypeActice : styles.priceTypeInactice
                }
                onPress={() => setPriceType(true)}>
                <Text style={styles.priceTypeTextStyle}>LAC</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  priceType ? styles.priceTypeInactice : styles.priceTypeActice
                }
                onPress={() => setPriceType(false)}>
                <Text style={styles.priceTypeTextStyle}>Cr</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop:hp(3)}}>
              <Text >Select Type</Text>
              <View style={{flexDirection:'row', marginTop:hp(1),}}>
              <TouchableOpacity
                style={
                  adType ? styles.priceTypeActice : styles.priceTypeInactice
                }
                onPress={() => setAdType(true)}>
                <Text style={styles.priceTypeTextStyle}>PUP</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={
                  adType ? styles.priceTypeInactice : styles.priceTypeActice
                }
                onPress={() => setAdType(false)}>
                <Text style={styles.priceTypeTextStyle}>M</Text>
              </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        <CustomButton
          btnContainer={styles.submitBtnContainer}
          btnText="Submit"
          btnTextStyles={styles.btnTextStyles}
        />
        <View style={{height: hp(8)}}></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
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
  activeBtnStyle: {
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
  inactiveBtnStyle: {
    width: wp(36),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.grey,
    borderRadius: 5,
  },

  textInputContainer: {
    width: wp(90),
    height: hp(8),
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    borderRadius: 5,
    borderWidth: 1,
    marginTop: hp(3),
    height: hp(30),
  },
  textInputStyles: {
    width: wp(78),
    fontFamily: fonts.regular,
    textAlignVertical: 'top',
    marginTop: hp(-1),
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: hp(2),
  },
  submitBtnContainer: {
    width: wp(36),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: hp(6),
  },
  priceTextInputContainer: {
    width: wp(68),
    height: hp(8),
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    borderRadius: 5,
    borderWidth: 1,
  },
  priceTextInputStyles: {
    width: wp(52),
    fontFamily: fonts.regular,
    textAlignVertical: 'top',
    marginTop: hp(-1),
  },
  priceTextInputView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: hp(2),
  },
  priceTypeContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:wp(90),
    justifyContent:'space-between',
    marginTop:hp(3)
  },
  priceTypeActice: {
    width: wp(10),
    height: hp(5),
    borderRadius: hp(5),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceTypeInactice: {
    width: wp(10),
    height: hp(5),
    borderRadius: hp(5),
    backgroundColor: colors.grey,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceTypeTextStyle: {
    fontFamily: fonts.semiBold,
    fontSize: hp(1.5),
    color: colors.white,
  },
});
