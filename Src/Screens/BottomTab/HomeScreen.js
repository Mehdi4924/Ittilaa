import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomHeader from '../../Components/CustomHeader';
import {hp, wp} from '../../Constants/Responsive';
import {colors} from '../../Constants/Colors';
import {allImages} from '../../Constants/Images';
import TitaniumFlatlist from '../../Components/TitaniumFlatlist';
import {titanium, topClassified, topInventories} from '../../Constants/dummyData';
import {fonts} from '../../Constants/Fonts';
import InventoriesComp from '../../Components/InventoriesComp';
import TopClassified from '../../Components/TopClassified';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <ScrollView>
        <CustomHeader
          headerStyle={styles.headerStyle}
          leftImage={allImages.logo2}
          leftImageStyle={{width: wp(50), height: hp(10)}}
          rightIconName="queue"
          rightIconType="material"
          rightIconColor={colors.white}
          rightIconSize={30}
          inputViewStyle={styles.inputViewStyle}
          textInputStyle={styles.textInputStyle}
          placeholder="Search"
          placeholderTextColor={colors.grey}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Titanium Agency</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        <TitaniumFlatlist
          horizontal={true}
          data={titanium}
          cardStyle={styles.cardStyle}
          listContainerstyle={styles.listContainerstyle}
          flatListStyle={styles.flatListStyle}
          listTitleStyle={styles.listTitleStyle}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Top Inventories</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        <InventoriesComp
          data={topInventories}
          inventoryCard={styles.inventoryCard}
          horizontal={true}
          flatListStyle={styles.flatListStyle}
          profileImgStyle={styles.profileImgStyle}
          profileImgContainer={styles.profileImgContainer}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Top Classified</Text>
          <Text style={styles.viewAllText}>View all</Text>
        </View>
        <TopClassified
          data={topClassified}
          horizontal={true}
        />
      </ScrollView>
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
  },
  textInputStyle: {
    width: wp(75),
  },
  cardStyle: {
    height: hp(12),
    width: wp(24),
    backgroundColor: colors.white,

    borderRadius: hp(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainerstyle: {
    // marginHorizontal:wp(5),
    marginTop: hp(2),
  },
  flatListStyle: {marginHorizontal: wp(5)},
  listTitleStyle: {
    maxWidth: wp(20),
    fontFamily: fonts.regular,
    textAlign: 'center',
    fontSize: hp(1.5),
    color: colors.secondary,
    marginTop: hp(1),
  },
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp(90),
    marginTop: hp(2),
    alignSelf: 'center',
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: hp(2.5),
    color: colors.secondary,
  },
  viewAllText: {
    fontFamily: fonts.medium,
    fontSize: hp(2),
    color: colors.primary,
  },
  inventoryCard: {
    width: wp(75),
    height: hp(30),
    backgroundColor: colors.white,
    elevation: 2,
    borderRadius: 14,
    marginTop:hp(2)
  },
  profileImgStyle: {
    width: wp(12),
    height: hp(6),
    borderRadius: wp(8),
  },
  profileImgContainer: {
    width: wp(14),
    height: hp(7),
    borderRadius: wp(7),
    backgroundColor: colors.white,
    elevation:1,
    alignItems:'center',
    justifyContent:'center'
  },
});