import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {allImages} from '../../Constants/Images';
import {fonts} from '../../Constants/Fonts';
import CustomButton from '../../Components/CustomButton';

export default function Inventories(props) {
  const listData = [
    {
      company: 'IronStone Equities',
      developer: 'Tamjeed\nDevelopers',
      person: 'Danial Babar',
      town: 'Bahria Town',
      society: 'Tulip Extensions',
      marlas: '05 Marla Plot',
      description: 'Plot 672, 8626, PU Paid, 96 Lacs Each',
    },
    {
      company: 'IronStone Equities',
      developer: 'Tamjeed\nDevelopers',
      person: 'Danial Babar',
      town: 'Bahria Town',
      society: 'Tulip Extensions',
      marlas: '05 Marla Plot',
      description: 'Plot 672, 8626, PU Paid, 96 Lacs Each',
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={listData}
        renderItem={({item, index}) => {
          return (
            <View style={styles.listContainer}>
              <View style={styles.listLeftView}>
                <Image
                  source={allImages.logo1}
                  style={styles.listImage}
                  resizeMode="contain"
                />
                <Text style={styles.listImageText}>
                  {item.developer || 'N/A'}
                </Text>
              </View>
              <View style={styles.listRightView}>
                <Text style={styles.listHeading}>{item.company || 'N/A'}</Text>
                <Text style={styles.listPersonName}>
                  {item.person || 'N/A'}
                </Text>
                <Text style={[styles.listText, {marginTop: hp(1)}]}>
                  {item.town || 'N/A'}
                </Text>
                <Text style={styles.listText}>{item.society || 'N/A'}</Text>
                <Text style={styles.listText}>{item.marlas || 'N/A'}</Text>
                <Text style={styles.listText}>{item.description || 'N/A'}</Text>
                <View style={styles.listBtnView}>
                  <Text style={styles.listPersonName}>1 day ago</Text>
                  <CustomButton
                    btnText="See Details"
                    indicator={false}
                    onPress={() =>
                      props.navigation.navigate('AppFlow', {
                        screen: 'InventoryDetails',
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
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
    fontFamily: fonts.bold,
    color: colors.grey,
    fontSize: hp(1.6),
  },
  listBtnView: {
    width: wp(55),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
