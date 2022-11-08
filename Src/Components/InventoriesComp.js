import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {hp, wp} from '../Constants/Responsive';
import {fonts} from '../Constants/Fonts';
import {colors} from '../Constants/Colors';
import {Icon} from '@rneui/themed';

export default function InventoriesComp(props) {
  return (
    <View>
      <FlatList
        contentContainerStyle={props.flatListStyle}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <View
            key={index}
            style={{...props.inventoryCard, marginRight: wp(8)}}>
            <View style={styles.profileContainer}>
              <View style={props.profileImgContainer}>
                <Image
                  source={item.image}
                  style={props.profileImgStyle}
                  resizeMode="contain"
                />
              </View>
              <View style={{marginLeft: wp(4)}}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.byUser}>By:{item.by}</Text>
              </View>
            </View>
            <View style={styles.detailsContainer}>
              <Text style={styles.text2}>{item.details}</Text>
            </View>
            <View style={styles.locationMain}>
              <View style={styles.locationContainer}>
                <Text style={styles.locationText}>Plot for Sale</Text>
                <Icon
                  type="material"
                  name="place"
                  size={10}
                  color={colors.white}
                />
              </View>
              <Text style={{...styles.text2, marginLeft: wp(2)}}>
                {item.address}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp(4),
    marginTop: hp(2),
  },
  title: {
    fontFamily: fonts.medium,
    fontSize: hp(1.5),
    color: colors.secondary,
  },
  byUser: {
    fontFamily: fonts.regular,
    fontSize: hp(1.4),
    color: colors.grey,
  },
  detailsContainer: {
    marginLeft: wp(4),
    marginTop: hp(2),
  },
  text2: {
    fontFamily: fonts.regular,
    fontSize: hp(1.5),
    color: colors.secondary,
    maxWidth: wp(50),
  },
  locationContainer: {
    height: hp(3),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
    borderRadius: hp(2),
  },
  locationText: {
    fontFamily: fonts.medium,
    fontSize: hp(1.3),
    color: colors.white,
  },
  locationMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: wp(4),
    marginTop: hp(2),
  },
});
