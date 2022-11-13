import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomHeader from '../../Components/CustomHeader';
import {hp, wp} from '../../Constants/Responsive';
import {colors} from '../../Constants/Colors';
import {allImages} from '../../Constants/Images';
import TitaniumFlatlist from '../../Components/TitaniumFlatlist';
import {
  Featured,
  NewsData,
  titanium,
  topClassified,
  topInventories,
} from '../../Constants/dummyData';
import {fonts} from '../../Constants/Fonts';
import InventoriesComp from '../../Components/InventoriesComp';
import CustomFlatList from '../../Components/CustomFlatList';
import TopClassifiedComp from '../../Components/TopClassifiedComp';
import {Icon} from '@rneui/themed';

export default function AllAgencies() {
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
        inputViewStyle={styles.inputViewStyle}
        textInputStyle={styles.textInputStyle}
        placeholder="Search"
        placeholderTextColor={colors.grey}
        screenTitle="Inventories"
        screenTitleStyle={styles.screenTitleStyle}
      />
      <FlatList
        data={['a', 'a', 'a', 'a']}
        contentContainerStyle={{
          paddingHorizontal: wp(5),
          marginVertical: hp(2),
        }}
        renderItem={({item, index}) => {
          const a = index % 2;
          console.log(a);
          return (
            <View
              style={[
                styles.listContainer,
                {backgroundColor: a == 1 ? colors.white : colors.black},
              ]}>
              <Image
                source={allImages.tamjeed}
                style={
                  a == 1
                    ? styles.agencyProfileImage
                    : styles.agencyProfileImage1
                }
              />
              <View style={styles.listTextView}>
                <Text style={styles.vendorName}>Ahmad State</Text>
                <Text
                  style={[
                    styles.developerName,
                    {color: a == 1 ? colors.black : colors.white},
                  ]}>
                  Tamjeed Developers{' '}
                </Text>
                <View style={styles.locationView}>
                  <Icon
                    name={'location'}
                    type={'ionicon'}
                    color={colors.primary}
                    size={hp(2)}
                    style={{marginRight: wp(2)}}
                  />
                  <Text style={styles.locationText}>Ahmad State</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  headerStyle: {
    width: wp(100),
    height: hp(20),
    backgroundColor: colors.primary,
  },
  inputViewStyle: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: wp(5),
    borderRadius: 5,
    alignItems: 'center',
    paddingHorizontal: wp(2),
    marginTop: hp(2),
  },
  textInputStyle: {
    width: wp(75),
    fontFamily: fonts.regular,
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
  agencyProfileImage: {
    width: hp(10),
    height: hp(10),
    backgroundColor: colors.white,
    borderRadius: hp(7),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  agencyProfileImage1: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(7),
    backgroundColor: colors.white,
  },
  listContainer: {
    flexDirection: 'row',
    marginVertical: hp(1),
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
    borderRadius: 5,
    elevation: 5,
  },
  listTextView: {
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.5),
    justifyContent: 'space-around',
  },
  vendorName: {
    fontFamily: fonts.bold,
    color: colors.primary,
    fontSize: hp(1.8),
  },
  developerName: {
    fontFamily: fonts.regular,
    fontSize: hp(1.8),
  },
  locationView: {flexDirection: 'row', alignItems: 'center'},
  locationText: {
    fontFamily: fonts.regular,
    color: colors.grey,
    fontSize: hp(1.8),
  },
});
