import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {hp, wp} from '../Constants/Responsive';
import {fonts} from '../Constants/Fonts';
import {colors} from '../Constants/Colors';
import {Icon} from '@rneui/themed';
import {URL} from '../Constants/URL';
import EmptyComponent from './EmptyComponent';

export default function InventoriesComp(props) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [maxSlider, setMaxSlider] = useState(props.data.length - 1);
  const flatListRef = useRef();
  useEffect(() => {
    listAnimator();
  }, []);

  let nextIndex = 0;
  async function listAnimator() {
    setInterval(function () {
      if (nextIndex < maxSlider) {
        nextIndex = nextIndex + 1;
        scrollToIndex(nextIndex, true);
      } else {
        nextIndex = 0;
        scrollToIndex(0, true);
      }
      setSliderIndex(nextIndex);
    }, 2000);
  }
  async function scrollToIndex(index, animated) {
    flatListRef.current && flatListRef.current.scrollToIndex({index, animated});
  }
  return (
    <View>
      {props.animation ? (
        <FlatList
          contentContainerStyle={props.flatListStyle}
          horizontal={props.horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={props.data}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <EmptyComponent emptyContainer={{height: hp(5)}} />
          }
          ref={r => (props.data.length > 0 ? (flatListRef.current = r) : null)}
          onScrollToIndexFailed={info => {
            nextIndex = 0;
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              scrollToIndex(0, true);
            });
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                key={index}
                style={props.inventoryCard}
                onPress={() => props.onPress(item)}>
                <View style={styles.profileContainer}>
                  <View style={props.profileImgContainer}>
                    <Image
                      source={
                        item?.agency?.file
                          ? {uri: URL.imageURL + item?.agency?.file?.file}
                          : require('../Assets/Images/agency-dummy.png')
                      }
                      style={props.profileImgStyle}
                      resizeMode="contain"
                    />
                  </View>
                  <View style={{marginLeft: wp(4)}}>
                    <Text style={styles.title}>
                      {item?.agency?.name || 'N/A'}
                    </Text>
                    <Text style={styles.byUser}>
                      By: {item?.agency?.ceo_name || 'N/A'}
                    </Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.text2}>
                    Plot Number {item?.plot_no} is available {'\n'} in{' '}
                    {item?.block}, {item?.society?.name}, {item?.city?.name}{' '}
                    {'\n'} at {item?.price}
                    {item?.price_unit} Rupees
                  </Text>
                </View>
                <View style={styles.locationMain}>
                  <View style={styles.locationContainer}>
                    <Text style={styles.locationText}>
                      {item?.type || ''} for {item?.purpose || ''}
                    </Text>
                    <Icon
                      type="material"
                      name="place"
                      size={10}
                      color={colors.white}
                    />
                  </View>
                  <Text
                    style={{
                      ...styles.text2,
                      marginLeft: wp(2),
                      maxWidth: wp(45),
                    }}
                    numberOfLines={1}>
                    Plot No. {item?.plot_no} in {item?.block}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <FlatList
          contentContainerStyle={props.flatListStyle}
          horizontal={props.horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={
            <EmptyComponent emptyContainer={{height: hp(5)}} />
          }
          data={props.data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={props.inventoryCard}
              onPress={() => props.onPress(item)}>
              <View style={styles.profileContainer}>
                <View style={props.profileImgContainer}>
                  <Image
                    source={
                      item?.agency?.file
                        ? {uri: URL.imageURL + item?.agency?.file?.file}
                        : require('../Assets/Images/agency-dummy.png')
                    }
                    style={props.profileImgStyle}
                    resizeMode="contain"
                  />
                </View>
                <View style={{marginLeft: wp(4)}}>
                  <Text style={styles.title}>
                    {item?.agency?.name || 'N/A'}
                  </Text>
                  <Text style={styles.byUser}>
                    By: {item?.agency?.ceo_name || 'N/A'}
                  </Text>
                </View>
              </View>
              <View style={styles.detailsContainer}>
                <Text style={styles.text2}>
                  Plot Number {item?.plot_no} is available {'\n'} in{' '}
                  {item?.block}, {item?.society?.name}, {item?.city?.name}{' '}
                  {'\n'} at {item?.price}
                  {item?.price_unit} Rupees
                </Text>
              </View>
              <View style={styles.locationMain}>
                <View style={styles.locationContainer}>
                  <Text style={styles.locationText}>
                    {item?.type || ''} for {item?.purpose || ''}
                  </Text>
                  <Icon
                    type="material"
                    name="place"
                    size={10}
                    color={colors.white}
                  />
                </View>
                <Text
                  style={{
                    ...styles.text2,
                    marginLeft: wp(2),
                    maxWidth: wp(38),
                  }}
                  numberOfLines={2}>
                  Plot No. {item?.plot_no} in {item?.block}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
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
