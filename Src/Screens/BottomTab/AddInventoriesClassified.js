import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../Components/CustomHeader';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';
import CustomButton from '../../Components/CustomButton';
import CustomTextInput from '../../Components/CustomTextInput';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  adCategories,
  cityItem,
  invenCategories,
  plotType,
  purpose,
  sizes,
  societyItem,
  typeItem,
} from '../../Constants/dummyData';
import CustomDropdown from '../../Components/CustomDropdown';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Icon} from '@rneui/themed';

export default function AddInventoriesClassified(props) {
  const [inventory, setInventory] = useState(true);
  const [classify, setClassify] = useState(false);
  const [priceType, setPriceType] = useState(true);
  const [adType, setAdType] = useState(true);
  const [imageUri, setImageUri] = useState('');
  const [fileName, setFileName] = useState('');
  const [socValue, setSocValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [clsTypeValue, setClsTypeValue] = useState('');
  const [propPurpose, setpropPurpose] = useState('');
  const [clsProPurpose, setclsProPurpose] = useState('');
  const [category, setCategory] = useState('');
  const [clsCategory, setClsCategory] = useState('');
  const [plotSize, setplotSize] = useState('');
  const [city, setCity] = useState('');
  const [block, setBlock] = useState('');
  const [price, setPrice] = useState('');
  const [PUP, setPUP] = useState(false);
  const [CP, setCP] = useState(false);
  const [MB, setMB] = useState(false);
  const [FP, setFP] = useState(false);

  const openGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response =', response);
      if (response.didCancel) {
        console.log('User Cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error', response.error);
      } else if (response.btnClick) {
        console.log('User Click button', response.btnClick);
      } else {
        const source = {uri: 'data:image/jpeg;base64' + response.assets};
        console.log('This is URI', response.assets[0].uri);
        setFileName(response.assets[0].uri);
        setImageUri(response.assets[0]);
      }
    });
  };
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
          search={true}
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
            <CustomDropdown
              data={cityItem}
              topLabelText={'City'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="place"
              placeholder={'Select City'}
              value={city}
              onChange={item => setCity(item.value)}
            />
            <CustomDropdown
              data={societyItem}
              topLabelText={'Society'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              placeholder={'Select Society'}
              iconName={'users'}
              iconType="font-awesome"
              value={socValue}
              onChange={item => setSocValue(item.value)}
            />
            <CustomDropdown
              data={typeItem}
              topLabelText={'Type'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="merge-type"
              placeholder={'Select Type'}
              value={typeValue}
              onChange={item => setTypeValue(item.value)}
            />
            <CustomDropdown
              data={purpose}
              topLabelText={'Purpose'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="business"
              placeholder={'Select Purpose'}
              value={propPurpose}
              onChange={item => setpropPurpose(item.value)}
            />
            <CustomDropdown
              data={invenCategories}
              topLabelText={'Category'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="category"
              placeholder={'Select Category'}
              value={category}
              onChange={item => setCategory(item.value)}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <CustomTextInput
                topText="Plot/Propert No."
                iconType="material"
                iconName="fullscreen-exit"
                iconSize={26}
                placeholder="Enter Plot No."
                textInputContainer={styles.plNoTxtInpContainer}
                textInputStyles={styles.plNoTxtInpStyles}
                textInputView={styles.plNoTxtInpView}
              />
              <CustomDropdown
                dropdown={styles.sizesDropdown}
                data={sizes}
                topLabelText={'Size'}
                labelFieldName={'label'}
                valueFieldName={'value'}
                iconType="material"
                iconName="fullscreen"
                placeholder={'Size'}
                value={plotSize}
                onChange={item => setplotSize(item.value)}
              />
            </View>
            <CustomTextInput
              textInputContainer={{marginTop: hp(2), borderRadius: 8}}
              topText="Block"
              iconType="material"
              iconName="grid-view"
              iconSize={26}
              placeholder="Enter Block"
              value={block}
              onChangeText={e => setBlock(e)}
            />
            <View style={styles.priceTypeContainer}>
              <CustomTextInput
                topText="Price"
                iconType="material"
                iconName="local-offer"
                iconSize={26}
                placeholder="Enter Price"
                value={price}
                onChangeText={e => setPrice(e)}
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
            <View style={{marginTop: hp(4)}}>
              <Text>Feature/Paid</Text>
              <View style={{flexDirection: 'row', marginTop: hp(1)}}>
                <TouchableOpacity
                  style={
                    PUP ? styles.priceTypeActice : styles.priceTypeInactice
                  }
                  onPress={() => setPUP(!PUP)}>
                  <Text style={styles.priceTypeTextStyle}>PUP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...(MB ? styles.priceTypeActice : styles.priceTypeInactice),
                    marginLeft: wp(2),
                  }}
                  onPress={() => setMB(!MB)}>
                  <Text style={styles.priceTypeTextStyle}>M</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...(CP ? styles.priceTypeActice : styles.priceTypeInactice),
                    marginLeft: wp(2),
                  }}
                  onPress={() => setCP(!CP)}>
                  <Text style={styles.priceTypeTextStyle}>CP</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    ...(FP ? styles.priceTypeActice : styles.priceTypeInactice),
                    marginLeft: wp(2),
                  }}
                  onPress={() => setFP(!FP)}>
                  <Text style={styles.priceTypeTextStyle}>FP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.photoContainer}>
              {fileName ? (
                <ImageBackground
                  source={{uri: fileName}}
                  style={{width: wp(85), height: hp(18), borderRadius: 8}}
                  imageStyle={{borderRadius: 8}}
                  resizeMode="contain">
                  <TouchableOpacity
                    style={styles.delIconContainer}
                    onPress={() => {
                      setFileName('');
                    }}>
                    <Icon
                      type="material"
                      name="delete"
                      size={25}
                      color={colors.primary}
                    />
                  </TouchableOpacity>
                </ImageBackground>
              ) : (
                <>
                  <TouchableOpacity
                    onPress={() => {
                      openGallery();
                    }}>
                    <Icon
                      type="material"
                      name="collections"
                      size={50}
                      color={colors.grey}
                    />
                  </TouchableOpacity>
                  <Text style={styles.insertPhotoText}>Insert Cover Photo</Text>
                </>
              )}
            </View>
            <CustomDropdown
              // data={()=>{}}
              topLabelText={'Location'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="place"
              placeholder={'Select Location'}
              container={{marginTop: hp(4)}}
            />

            <CustomTextInput
              textInputContainer={{
                marginTop: hp(2),
                height: hp(7),
                borderRadius: 8,
              }}
              topText="Title."
              iconType="material"
              iconName="title"
              iconSize={26}
              placeholder="Enter plot title"
            />
            <CustomDropdown
              container={{marginTop: hp(4)}}
              data={typeItem}
              topLabelText={'Type'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="merge-type"
              placeholder={'Select Type'}
              value={clsTypeValue}
              onChange={item => setClsTypeValue(item.value)}
            />
            <CustomDropdown
              container={{marginTop: hp(2.5)}}
              data={purpose}
              topLabelText={'Purpose'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="business"
              placeholder={'Select Purpose'}
              value={clsProPurpose}
              onChange={item => setclsProPurpose(item.value)}
            />
            <CustomDropdown
              container={{marginTop: hp(2.5)}}
              data={invenCategories}
              topLabelText={'Category'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="category"
              placeholder={'Select Category'}
              value={clsCategory}
              onChange={item => setClsCategory(item.value)}
            />

            <View style={styles.amenitiesMainContainer}>
              <CustomTextInput
                topText="Beds"
                iconType="font-awesome"
                iconName="bed"
                iconSize={20}
                placeholder="Beds"
                textInputContainer={styles.amenitiesContainer}
                textInputStyles={styles.amenitiesInputStyles}
                textInputView={styles.amenitiesInputView}
              />
              <CustomTextInput
                topText="Bath"
                iconType="font-awesome"
                iconName="bath"
                iconSize={20}
                placeholder="Baths"
                textInputContainer={styles.amenitiesContainer}
                textInputStyles={styles.amenitiesInputStyles}
                textInputView={styles.amenitiesInputView}
              />
              <CustomTextInput
                topText="Floor"
                iconType="material-community"
                iconName="floor-plan"
                iconSize={20}
                placeholder="Floor"
                textInputContainer={styles.amenitiesContainer}
                textInputStyles={styles.amenitiesInputStyles}
                textInputView={styles.amenitiesInputView}
              />
            </View>
            <CustomDropdown
              container={{marginTop: hp(4)}}
              dropdown={{...styles.sizesDropdown, width: wp(90)}}
              data={sizes}
              topLabelText={'Area'}
              labelFieldName={'label'}
              valueFieldName={'value'}
              iconType="material"
              iconName="fullscreen"
              placeholder={'Area'}
              value={plotSize}
              onChange={item => setplotSize(item.value)}
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
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTextInputStyles: {
    width: wp(52),
    fontFamily: fonts.regular,
  },
  priceTextInputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  priceTypeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(90),
    justifyContent: 'space-between',
    marginTop: hp(3.5),
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
  photoContainer: {
    width: wp(90),
    height: hp(20),
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    borderRadius: hp(1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  insertPhotoText: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.5),
    color: colors.black,
    marginTop: hp(2),
  },
  fileNameStyle: {
    fontFamily: fonts.medium,
    fontSize: hp(2),
    color: colors.grey,
  },
  amenitiesMainContainer: {
    width: wp(90),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  amenitiesContainer: {
    width: wp(28),
    height: hp(6),
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: wp(2),
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
  },
  amenitiesInputStyles: {
    width: wp(18),
    fontFamily: fonts.regular,
    textAlignVertical: 'top',
  },
  amenitiesInputView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plNoTxtInpContainer: {
    width: wp(50),
    height: hp(7),
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  plNoTxtInpStyles: {
    width: wp(35),
    fontFamily: fonts.regular,
  },
  plNoTxtInpView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizesDropdown: {
    height: hp(7),
    width: wp(35),
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  delIconContainer: {
    position: 'absolute',
    right: wp(2),
    bottom: hp(1),
    backgroundColor: colors.white,
    borderRadius: hp(2),
    padding: 2,
  },
});
