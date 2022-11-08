import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constants/Responsive';
import {colors} from '../Constants/Colors';
import {fonts} from '../Constants/Fonts';
import {Icon} from '@rneui/themed';

export default function TopClassified(props) {
  return (
    <View>
      <FlatList
        contentContainerStyle={styles.flatListStyle}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View key={index} style={styles.cardStyle}>
            <Image
              source={item.image}
              style={styles.imageStyle}
              resizeMode="contain"
            />
            <View style={styles.titlePriceContainer}>
              <Text style={styles.titleText}>{item.name}</Text>
              <Text style={styles.priceText}>{item.price}</Text>
            </View>
            <Text style={styles.addressStyle}>{item.address}</Text>
            <View style={styles.amenitiesContainer}>
              <View style={styles.amenities}>
                <Icon
                  type="font-awesome"
                  name="bed"
                  size={10}
                  color={colors.white}
                />
                <Text style={styles.amenitiesText}>{item.bedroom}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    width: wp(40),
    height: hp(20),
    backgroundColor: colors.white,
    elevation: 1,
    borderRadius: 10,
    marginRight: wp(3),
    alignItems: 'center',
  },
  flatListStyle: {
    marginHorizontal: wp(5),
  },
  imageStyle: {
    width: wp(36),
    height: hp(10),
    borderRadius: 10,
    marginTop: hp(1),
  },
  titlePriceContainer: {
    flexDirection: 'row',
    width: wp(36),
    justifyContent: 'space-between',
    marginTop: hp(0.5),
    alignItems: 'center',
  },
  titleText: {
    fontFamily: fonts.bold,
    fontSize: hp(1.4),
    color: colors.secondary,
    maxWidth: wp(25),
  },
  priceText: {
    fontFamily: fonts.bold,
    fontSize: hp(1.4),
    color: colors.primary,
    textAlign: 'right',
  },
  addressStyle: {
    fontFamily: fonts.regular,
    fontSize: hp(1),
    color: colors.grey,
  },
  amenities: {
    paddingHorizontal: wp(2),
    paddingVertical: hp(1),
    backgroundColor: colors.primary,
    flexDirection: 'row',
  },
  amenitiesText: {
    fontFamily: fonts.semiBold,
    fontSize: hp(1.4),
  },
});
