import {
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
export default function HomeScreen(props) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          iconContainer={styles.iconContainer}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Titanium Agency</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AppFlow', {screen: 'AllAgencies'})
            }>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AppFlow', {screen: 'TopInventories'})
            }>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
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
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AppFlow', {screen: 'TopClassified'})
            }>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <TopClassifiedComp
          data={topClassified.slice(0, 4)}
          horizontal={true}
          classifiedFlatListStyle={styles.flatListStyle}
          classifiedCardStyle={styles.classifiedCardStyle}
          classifiedImageStyle={styles.classifiedImageStyle}
          classifiedTitlePrice={styles.classifiedTitlePrice}
          classifiedTitleText={styles.classifiedTitleText}
          classifiedPriceText={styles.classifiedPriceText}
          classifiedAddressStyle={styles.classifiedAddressStyle}
          classifiedAmenities={styles.classifiedAmenities}
          classifiedAmenitiesText={styles.classifiedAmenitiesText}
          amenitiesIconSize={10}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Featured Projects</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AppFlow', {screen: 'FeaturedProjects'})
            }>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <CustomFlatList
          data={Featured.slice(0, 5)}
          horizontal={true}
          featureCard={styles.featureCard}
          featureImageStyle={styles.featureImageStyle}
          featureNameText={styles.featureNameText}
          flatListStyle={styles.flatListStyle}
        />
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>News</Text>
          <TouchableOpacity
            onPress={() =>
              props.navigation.navigate('AppFlow', {screen: 'News'})
            }>
            <Text style={styles.viewAllText}>View all</Text>
          </TouchableOpacity>
        </View>
        <CustomFlatList
          data={NewsData}
          horizontal={true}
          featureCard={styles.newsCard}
          featureImageStyle={styles.newsImageStyle}
          featureNameText={styles.newsNameText}
          flatListStyle={styles.flatListStyle}
        />

        <View style={{height: hp(4)}}></View>
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
    fontFamily: fonts.regular,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: wp(5),
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
  flatListStyle: {marginHorizontal: wp(5), paddingRight: wp(6)},
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
    // elevation: 1,
    borderRadius: 14,
    marginTop: hp(2),
    marginRight: wp(8),
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.08)',
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
    elevation: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classifiedCardStyle: {
    width: wp(40),
    backgroundColor: colors.white,
    borderRadius: 10,
    marginRight: wp(3),
    alignItems: 'center',
    paddingBottom: hp(1),
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.09)',
  },

  classifiedImageStyle: {
    width: wp(36),
    height: hp(10),
    borderRadius: 10,
    marginTop: hp(1),
  },
  classifiedTitlePrice: {
    flexDirection: 'row',
    width: wp(36),
    justifyContent: 'space-between',
    marginTop: hp(0.5),
    alignItems: 'center',
  },
  classifiedTitleText: {
    fontFamily: fonts.bold,
    fontSize: hp(1.4),
    color: colors.secondary,
    maxWidth: wp(25),
  },
  classifiedPriceText: {
    fontFamily: fonts.bold,
    fontSize: hp(1.4),
    color: colors.primary,
    textAlign: 'right',
  },
  classifiedAddressStyle: {
    fontFamily: fonts.regular,
    fontSize: hp(1),
    color: colors.grey,
    width: wp(35),
  },
  classifiedAmenities: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(0.2),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    borderRadius: 4,
    marginTop: hp(1),
  },
  classifiedAmenitiesText: {
    fontFamily: fonts.semiBold,
    fontSize: hp(1.2),
    color: 'white',
    marginLeft: wp(0.5),
  },
  featureCard: {
    width: wp(26),
    height: hp(15),
    backgroundColor: colors.white,
    marginRight: wp(3),
    alignItems: 'center',
    borderRadius: hp(1),
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.09)',
  },
  featureImageStyle: {
    width: wp(26),
    height: hp(8),
    borderTopRightRadius: hp(1),
    borderTopLeftRadius: hp(1),
  },
  featureNameText: {
    fontFamily: fonts.medium,
    fontSize: hp(1.2),
    color: colors.black,
    alignSelf: 'flex-start',
    marginHorizontal: wp(1),
    marginTop: hp(0.5),
  },
  newsCard: {
    width: wp(26),
    height: hp(15),
    backgroundColor: colors.white,
    marginRight: wp(3),
    alignItems: 'center',
    borderRadius: hp(1),
    borderWidth: 1,
    borderColor: colors.primary,
    paddingVertical: hp(0.5),
  },
  newsImageStyle: {
    width: wp(23),
    height: hp(8),
    borderRadius: hp(1),
  },
  newsNameText: {
    width: wp(23),
    fontFamily: fonts.medium,
    fontSize: hp(1.2),
    color: colors.black,
    alignSelf: 'flex-start',
    marginHorizontal: wp(1),
    marginTop: hp(0.5),
  },
});
