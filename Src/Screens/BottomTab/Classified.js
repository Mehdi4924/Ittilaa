import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {ImageBackground} from 'react-native';
import {allImages} from '../../Constants/Images';
import {fonts} from '../../Constants/Fonts';
import {Icon} from '@rneui/themed';
import CustomLoader from '../../Components/CustomLoader';
import CustomHeader from '../../Components/CustomHeader';

export default function Classified(props) {
  return (
    <View style={styles.container}>
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
        screenTitle="Classified"
        screenTitleStyle={styles.screenTitleStyle}
      />
      <CustomLoader isLoading={false} />
      <FlatList
        data={[1, 23, 4, 5, 5, 5, 6]}
        renderItem={({item, index}) => (
          <TouchableOpacity
            style={styles.listContainer}
            onPress={() =>
              props.navigation.navigate('AppFlow', {
                screen: 'ClassifiedDetails',
              })
            }>
            <ImageBackground
              style={styles.listImage}
              imageStyle={{
                borderRadius: 15,
              }}
              source={{
                uri: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/home-improvement/wp-content/uploads/2022/07/download-23.jpg',
              }}>
              <Text style={styles.listTimeText}>2 Minutes Ago</Text>
            </ImageBackground>
            <View style={styles.listSubView}>
              <View style={styles.listItemDetailsView}>
                <Text style={styles.itemDescriptionText}>House For Sale</Text>
                <Text style={styles.itemTypeText}>Residential Plot</Text>
              </View>
              <View style={styles.listItemDetailsView}>
                <Text style={styles.itemDimensionsText}>3 Marla</Text>
                <Icon
                  name={'expand'}
                  type={'font-awesome-5'}
                  color={colors.primary}
                  size={hp(2)}
                />
              </View>
            </View>
            <View style={styles.listItemDetailsView2}>
              <View style={styles.listItemDetailsView}>
                <Icon
                  name={'location'}
                  type={'ionicon'}
                  color={colors.primary}
                  size={hp(2)}
                />
                <Text style={styles.listAddressText}>
                  Sector C, Tulip Block, Bahria Town, Lahore
                </Text>
              </View>
              <View style={styles.listBottomIconsView}>
                <View style={styles.listItemDetailsView}>
                  <Icon
                    name={'bed-outline'}
                    type={'ionicon'}
                    color={colors.white}
                    size={hp(2)}
                  />
                  <Text style={styles.listBottomIconsText}>1</Text>
                </View>
                <View style={styles.listBottomViewDivider}></View>
                <View style={styles.listItemDetailsView}>
                  <Icon
                    name={'shower'}
                    type={'font-awesome'}
                    color={colors.white}
                    size={hp(1.7)}
                  />
                  <Text style={styles.listBottomIconsText}>1</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
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
  listContainer: {
    width: wp(95),
    backgroundColor: colors.tertiary,
    marginVertical: hp(1),
  },
  listImage: {
    width: wp(95),
    height: hp(22),
    padding: 10,
  },
  listTimeText: {
    backgroundColor: 'rgba(1,1,1,0.8)',
    width: wp(30),
    color: colors.white,
    padding: 5,
    borderRadius: 20,
    textAlign: 'center',
  },
  listSubView: {
    width: wp(95),
    marginTop: hp(1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
  },
  listItemDetailsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemDescriptionText: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: hp(2),
  },
  itemTypeText: {
    fontFamily: fonts.regular,
    color: colors.primary,
    fontSize: hp(1.5),
    marginLeft: wp(1),
  },
  itemDimensionsText: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: hp(1.5),
    marginRight: wp(1),
  },
  listItemDetailsView2: {
    width: wp(95),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hp(2),
  },
  listAddressText: {
    fontFamily: fonts.regular,
    color: colors.black,
    fontSize: hp(1.5),
    marginLeft: wp(1),
    width: wp(60),
  },
  listBottomIconsView: {
    width: wp(18),
    paddingHorizontal: 5,
    borderRadius: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  listBottomIconsText: {
    fontFamily: fonts.bold,
    color: colors.white,
    fontSize: hp(1.5),
    marginLeft: wp(1),
  },
  listBottomViewDivider: {
    height: hp(2),
    width: 2,
    borderRadius: 1,
    backgroundColor: colors.white,
  },
});
