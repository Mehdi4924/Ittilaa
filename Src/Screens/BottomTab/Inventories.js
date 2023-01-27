import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {allImages} from '../../Constants/Images';
import {fonts} from '../../Constants/Fonts';
import CustomButton from '../../Components/CustomButton';
import CustomHeader from '../../Components/CustomHeader';
import InventoriesComp from '../../Components/InventoriesComp';
import {topInventories} from '../../Constants/dummyData';
import axios from 'axios';
import {URL} from '../../Constants/URL';
import {AppFlow} from '../../Api/ApiCalls';
import {useFocusEffect} from '@react-navigation/native';
import moment from 'moment';
import EmptyComponent from '../../Components/EmptyComponent';
import CustomLoader from '../../Components/CustomLoader';

export default function Inventories(props) {
  const [listData, setListData] = useState([]);
  const [hotData, setHotData] = useState([]);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      Inventories();
    }, []),
  );

  const Inventories = () => {
    AppFlow.allInventories()
      .then(function (response) {
        console.log(
          'Response data',
          // JSON.stringify(response, null, 2),
          response,
        );
        setListData(response?.data?.data?.inventory);
        setHotData(response?.data?.data?.hot_inventory);
      })
      .catch(function (error) {
        console.log('Inventories Error', error);
      })
      .finally(function () {
        setLoading(false);
      });
  };
  const headerComponent = () => {
    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Hot Properties</Text>
        <InventoriesComp
          data={hotData}
          inventoryCard={styles.inventoryCard}
          horizontal={true}
          flatListStyle={styles.flatListStyle}
          profileImgStyle={styles.profileImgStyle}
          profileImgContainer={styles.profileImgContainer}
          onPress={item =>
              props.navigation.navigate('AppFlow', {
                screen: 'InventoryDetails',
                params: {inventory: item},
              })
            }
        />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <CustomLoader isLoading={loading} />
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
      <>
        <FlatList
          data={listData}
          ListHeaderComponent={headerComponent}
          ListEmptyComponent={
            <EmptyComponent emptyContainer={{height: hp(10), width: wp(90)}} />
          }
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingLeft: wp(5)}}
          renderItem={({item, index}) => {
            return (
              <View style={styles.listContainer}>
                <View style={styles.listLeftView}>
                  <Image
                    source={
                      item?.agency?.file?.file
                        ? {uri: URL.imageURL + item?.agency?.file?.file}
                        : allImages.logo1
                    }
                    style={styles.listImage}
                    resizeMode="contain"
                  />
                  <Text style={styles.listImageText}>
                    {item?.agency?.name || 'N/A'}
                  </Text>
                </View>
                <View style={styles.listRightView}>
                  <Text style={styles.listHeading}>
                    {item?.agency?.ceo_name || 'N/A'}
                  </Text>
                  <Text style={[styles.listText, {marginTop: hp(1)}]}>
                    {item?.city?.name || 'N/A'}
                  </Text>
                  <Text style={styles.listText}>
                    {item?.society?.name || 'N/A'}
                  </Text>
                  <Text style={styles.listText}>
                    {item?.size || 'N/A'} {item?.size_unit || 'N/A'}
                  </Text>
                  <Text style={styles.listText}>
                    {item?.description || 'N/A'}
                  </Text>
                  <View style={styles.listBtnView}>
                    <Text style={styles.listPersonName}>
                      {item?.created_at
                        ? moment(item.created_at).fromNow()
                        : 'N/A'}
                    </Text>
                    <CustomButton
                      btnText="See Details"
                      indicator={false}
                      onPress={() =>
                        props.navigation.navigate('AppFlow', {
                          screen: 'InventoryDetails',
                          params: {
                            inventory: item,
                          },
                        })
                      }
                      btnContainer={styles.btnContainer}
                      btnTextStyles={styles.btnTextStyles}
                    />
                  </View>
                </View>
              </View>
            );
          }}
        />
      </>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  headingText: {
    fontFamily: fonts.bold,
    color: colors.primary,
    width: wp(90),
    marginVertical: hp(1),
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
  btnContainer: {
    width: wp(22),
    height: hp(3.5),
    backgroundColor: colors.secondary,
    borderRadius: hp(6),
  },
  btnTextStyles: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: hp(1.5),
  },
  listContainer: {
    backgroundColor: colors.white,
    width: wp(95),
    elevation: 5,
    marginVertical: hp(1),
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'row',
  },
  listLeftView: {
    backgroundColor: colors.grey,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    width: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  listImage: {
    width: hp(10),
    height: hp(10),
    borderRadius: hp(20),
    backgroundColor: colors.white,
  },

  listImageText: {
    fontFamily: fonts.bold,
    textAlign: 'center',
    fontSize: hp(1.5),
    color: colors.white,
  },
  listRightView: {
    width: wp(64),
    backgroundColor: colors.white,
    paddingHorizontal: wp(5),
    paddingVertical: hp(1),
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  listHeading: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: hp(1.8),
  },
  listPersonName: {
    fontFamily: fonts.regular,
    color: colors.grey,
    fontSize: hp(1.6),
  },
  listText: {
    fontFamily: fonts.regular,
    color: colors.grey,
    fontSize: hp(1.6),
  },
  listBtnView: {
    width: wp(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  //hot properties
  flatListStyle: {
    marginBottom: hp(2),
  },
  inventoryCard: {
    width: wp(75),
    height: hp(30),
    backgroundColor: colors.white,
    elevation: 5,
    borderRadius: 14,
    marginRight: wp(5),
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
});
