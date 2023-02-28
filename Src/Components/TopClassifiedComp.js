import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {hp, wp} from '../Constants/Responsive';
import {colors} from '../Constants/Colors';
import {fonts} from '../Constants/Fonts';
import {Icon} from '@rneui/themed';
import {URL} from '../Constants/URL';
import EmptyComponent from './EmptyComponent';

export default function TopClassifiedComp(props) {
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
          contentContainerStyle={props.classifiedFlatListStyle}
          horizontal={props.horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={props.data}
          numColumns={props.numColumns}
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
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={props.classifiedCardStyle}
              onPress={() => props.onPress(item)}>
              <Image
                source={
                  item?.file?.length
                    ? {uri: URL.imageURL + item?.file[0]?.file}
                    : require('../Assets/Images/classified.jpeg')
                }
                style={props.classifiedImageStyle}
                resizeMode="contain"
              />
              <View style={props.classifiedTitlePrice}>
                <Text style={props.classifiedTitleText}>
                  {item.type == 'pa' ? 'House ' : 'Plot '}
                  For Sale
                </Text>
                <Text style={props.classifiedPriceText}>
                  Rs/.{item?.price || 'Loading'}
                </Text>
              </View>
              <View></View>
              <Text style={props.classifiedAddressStyle}>
                {item?.description || 'Loading'}
              </Text>
              <View style={styles.classifiedAmenitiesContainer}>
                <View style={props.classifiedAmenities}>
                  <Icon
                    type="font-awesome"
                    name="bed"
                    size={props.amenitiesIconSize}
                    color={colors.white}
                  />
                  <Text style={props.classifiedAmenitiesText}>
                    {item?.bed || '0'}
                  </Text>
                </View>
                <View style={props.classifiedAmenities}>
                  <Icon
                    type="font-awesome"
                    name="bath"
                    size={props.amenitiesIconSize}
                    color={colors.white}
                  />
                  <Text style={props.classifiedAmenitiesText}>
                    {item?.bath || '0'}
                  </Text>
                </View>
                <View style={props.classifiedAmenities}>
                  <Text style={props.classifiedAmenitiesText}>
                    {item?.size || 'N/A'} {item?.size_unit || 'N/A'}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      ) : (
        <FlatList
          contentContainerStyle={props.classifiedFlatListStyle}
          horizontal={props.horizontal}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          data={props.data}
          numColumns={props.numColumns}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <EmptyComponent emptyContainer={{height: hp(5)}} />
          }
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={props.classifiedCardStyle}
              onPress={() => props.onPress(item)}>
              <Image
                source={
                  item?.file?.length
                    ? {uri: URL.imageURL + item?.file[0]?.file}
                    : require('../Assets/Images/classified.jpeg')
                }
                style={props.classifiedImageStyle}
                resizeMode="contain"
              />
              <View style={props.classifiedTitlePrice}>
                <Text style={props.classifiedTitleText}>
                  {item.type == 'pa' ? 'House ' : 'Plot '}
                  For Sale
                </Text>
                <Text style={props.classifiedPriceText}>
                  Rs/. {item?.price || 'Loading'}
                </Text>
              </View>
              <View></View>
              <Text style={props.classifiedAddressStyle} numberOfLines={3}>
                {item?.description || 'Loading'}
              </Text>
              <View style={styles.classifiedAmenitiesContainer} >
                <View style={props.classifiedAmenities}>
                  <Icon
                    type="font-awesome"
                    name="bed"
                    size={props.amenitiesIconSize}
                    color={colors.white}
                  />
                  <Text style={props.classifiedAmenitiesText}>
                    {item?.bed || ''}
                  </Text>
                </View>
                <View style={props.classifiedAmenities}>
                  <Icon
                    type="font-awesome"
                    name="bath"
                    size={props.amenitiesIconSize}
                    color={colors.white}
                  />
                  <Text style={props.classifiedAmenitiesText}>
                    {item?.bath || ''}
                  </Text>
                </View>
                <View style={props.classifiedAmenities}>
                  <Text style={props.classifiedAmenitiesText}>
                    {item?.size || 'N/A'} {item?.size_unit || 'N/A'}
                  </Text>
                </View>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  classifiedAmenitiesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: wp(35),
  },
});
