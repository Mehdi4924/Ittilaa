import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useState} from 'react';
import {Icon} from '@rneui/base';
import CustomLoader from '../../../Components/CustomLoader';
import CustomTextInput from '../../../Components/CustomTextInput';
import CustomDropdown from '../../../Components/CustomDropdown';
import CustomButton from '../../../Components/CustomButton';
import {hp, wp} from '../../../Constants/Responsive';
import {colors} from '../../../Constants/Colors';
import {fonts} from '../../../Constants/Fonts';
import Toast from 'react-native-simple-toast';

export default function AddInformation(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const projectTypeHome = [
    {name: 'House', id: 1},
    {name: 'Flat', id: 2},
    {name: 'Upper Portion', id: 3},
    {name: 'Lower Portion', id: 4},
    {name: 'Room', id: 5},
    {name: 'PentHouse', id: 6},
    {name: 'Farm House', id: 7},
  ];
  const projectTypePlot = [
    {name: 'Residential Plot', id: 1},
    {name: 'Plot Form', id: 2},
    {name: 'Industrial Land', id: 3},
    {name: 'Agricultural Land', id: 4},
    {name: 'Commercial Plot', id: 5},
    {name: 'Plot File', id: 6},
  ];
  const projectTypeCommercial = [
    {name: 'Office', id: 1},
    {name: 'Warehouse', id: 2},
    {name: 'Shop', id: 3},
    {name: 'Factory', id: 4},
    {name: 'Buidling', id: 5},
    {name: 'Other', id: 6},
  ];
  function NavigateToAddLogo() {
    console.log('==>>', data);
    if (!data?.title || data?.title == '') {
      Toast.show('Please Enter Title First', Toast.SHORT);
    } else if (!data?.type || data?.type?.name == '') {
      Toast.show('Please Select Type First', Toast.SHORT);
    } else if (!data?.subType || data?.subType?.name == '') {
      Toast.show('Please Select Sub Type First', Toast.SHORT);
    } else if (!data?.landArea || data?.landArea == '') {
      Toast.show('Please Enter Land Area', Toast.SHORT);
    } else if (
      (data?.type?.name == 'Plots' && !data?.areaUnit) ||
      (data?.type?.name == 'Plots' && data?.areaUnit?.name == '')
    ) {
      Toast.show('Please Select Area Unit', Toast.SHORT);
    } else if (!data?.price || data?.price == '') {
      Toast.show('Please Enter Price', Toast.SHORT);
    } else if (!data?.address || data?.address == '') {
      Toast.show('Please Enter Address', Toast.SHORT);
    } else if (!data?.description || data?.description == '') {
      Toast.show('Please Enter Description', Toast.SHORT);
    } else {
      props.navigation.navigate('ImageUpload', data);
    }
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomLoader isLoading={isLoading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon
                name={'arrow-back-circle'}
                type={'ionicon'}
                color={colors.primary}
                size={hp(5)}
              />
            </TouchableOpacity>
            <Text style={styles.headingText}>Create Ad</Text>
            <View style={{width: hp(5)}}></View>
          </View>
          <Text style={styles.stepText}>Property Details: Step 1</Text>
          <CustomTextInput
            iconName={'title'}
            iconType="material"
            iconSize={hp(2.5)}
            topText="Property Title"
            placeholder="Please Enter Title"
            value={data?.title || ''}
            onChangeText={t =>
              setData(p => {
                return {...p, title: t};
              })
            }
            textInputContainer={{marginVertical: hp(1), marginTop: hp(4)}}
          />
          <CustomDropdown
            data={[
              {name: 'Homes', id: 1},
              {name: 'Plots', id: 2},
              {name: 'Commercial', id: 3},
            ]}
            topLabelText={'Project Type'}
            labelFieldName={'name'}
            valueFieldName={'id'}
            placeholder={'Select Type'}
            iconName={'merge-type'}
            iconType="material"
            value={data?.type}
            onChange={item =>
              setData(p => {
                return {...p, type: item};
              })
            }
          />
          <CustomDropdown
            data={
              data?.type?.name == 'Home'
                ? projectTypeHome
                : data?.type?.name == 'Plots'
                ? projectTypePlot
                : projectTypeCommercial
            }
            disable={!data?.type}
            topLabelText={'Project SUb Type'}
            labelFieldName={'name'}
            valueFieldName={'id'}
            placeholder={'Select Sub Type'}
            iconName={'text-format'}
            iconType="material"
            value={data?.subType}
            onChange={item =>
              setData(p => {
                return {...p, subType: item};
              })
            }
          />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: wp(90),
            }}>
            <CustomTextInput
              iconName={'crop-square'}
              iconType="material"
              iconSize={hp(2.5)}
              topText="Land Area"
              placeholder="Land Area"
              value={data?.landArea || ''}
              keyboardType={'decimal-pad'}
              onChangeText={t =>
                setData(p => {
                  return {...p, landArea: t};
                })
              }
              textInputContainer={{
                marginVertical: hp(2),
                width: wp(48),
                height: hp(8),
              }}
            />
            <CustomDropdown
              data={[
                {name: 'Marla', id: 1},
                {name: 'Sq.ft', id: 2},
                {name: 'Yards', id: 3},
                {name: 'Kanal', id: 4},
              ]}
              // disable={data?.type?.name != 'Plots'}
              topLabelText={'Area Unit'}
              labelFieldName={'name'}
              valueFieldName={'id'}
              placeholder={'Unit'}
              iconName={'straighten'}
              iconType="material"
              value={data?.areaUnit}
              onChange={item =>
                setData(p => {
                  return {...p, areaUnit: item};
                })
              }
              dropdown={{
                width: wp(38),
                height: hp(8),
              }}
            />
          </View>
          <CustomTextInput
            iconName={'place'}
            iconType="material"
            iconSize={hp(2.5)}
            topText="Property Address"
            placeholder="Please Enter Address"
            value={data?.address || ''}
            onChangeText={t =>
              setData(p => {
                return {...p, address: t};
              })
            }
            textInputContainer={{marginVertical: hp(2)}}
          />
          <CustomTextInput
            iconName={'local-offer'}
            iconType="material"
            iconSize={hp(2.5)}
            topText="Property Price"
            keyboardType={'decimal-pad'}
            placeholder="Please Enter Price"
            value={data?.price || ''}
            onChangeText={t =>
              setData(p => {
                return {...p, price: t};
              })
            }
            textInputContainer={{marginVertical: hp(2)}}
          />
          <CustomTextInput
            topText="Enter Description"
            iconType="material"
            iconName="info"
            iconSize={26}
            placeholder="Enter Description"
            textInputContainer={styles.textInputContainer}
            textInputStyles={styles.textInputStyles}
            iconStyles={styles.iconStyles}
            multiline={true}
            textInputView={styles.textInputView}
            value={data.description}
            onChangeText={t =>
              setData(p => {
                return {...p, description: t};
              })
            }
          />
          <CustomButton
            btnContainer={{...styles.submitBtnContainer, alignSelf: 'center'}}
            btnText="Next"
            btnTextStyles={styles.btnTextStyles}
            indicator={false}
            onPress={() => NavigateToAddLogo()}
            disabled={false}
          />
        </View>
        <View style={{height:hp(8)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(2),
  },
  headingText: {color: colors.black, fontFamily: fonts.bold},
  stepText: {color: colors.primary, fontFamily: fonts.bold},
  textInputContainer: {
    width: wp(90),
    height: hp(8),
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    borderRadius: 5,
    borderWidth: 1,
    marginTop: hp(2),
    height: hp(30),
  },
  textInputStyles: {
    width: wp(78),
    fontFamily: fonts.regular,
    textAlignVertical: 'top',
  },
  submitBtnContainer: {
    width: wp(80),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: hp(6),
  },
  btnTextStyles: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.5),
    color: colors.white,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: hp(2),
  },
});
