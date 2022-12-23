import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {hp, wp} from '../../Constants/Responsive';
import {colors} from '../../Constants/Colors';
import CustomHeader from '../../Components/CustomHeader';
import {fonts} from '../../Constants/Fonts';
import {topInventories} from '../../Constants/dummyData';
import InventoriesComp from '../../Components/InventoriesComp';
import {AppFlow} from '../../Api/ApiCalls';

export default function TopInventories(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    GetInventories();
  }, []);
  async function GetInventories() {
    await AppFlow.getAllClassifieds()
      .then(function (response) {
        console.log('Response data', JSON.stringify(response.data, null, 2));
        // setData(response.data.data);
      })
      .catch(function (error) {
        console.log('Dashboard Error', error.response);
      });
  }
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
        screenTitle="Top Inventories"
        screenTitleStyle={styles.screenTitleStyle}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Top Inventories</Text>
      </View>
      <InventoriesComp
        data={topInventories}
        inventoryCard={styles.inventoryCard}
        flatListStyle={styles.flatListStyle}
        profileImgStyle={styles.profileImgStyle}
        profileImgContainer={styles.profileImgContainer}
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
  titleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: wp(90),
    marginVertical: hp(2),
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
  flatListStyle: {paddingTop: hp(1), paddingBottom: hp(30)},
  inventoryCard: {
    width: wp(90),
    backgroundColor: colors.white,
    borderRadius: 14,
    marginTop: hp(2),
    borderWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.08)',
    paddingBottom: hp(2),
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
});
