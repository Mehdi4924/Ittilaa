import {FlatList, Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {hp, wp} from '../Constants/Responsive';
import {colors} from '../Constants/Colors';
import {fonts} from '../Constants/Fonts';
import {Icon} from '@rneui/themed';

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
          ref={r => (flatListRef.current = r)}
          onScrollToIndexFailed={info => {
            const wait = new Promise(resolve => setTimeout(resolve, 500));
            wait.then(() => {
              scrollToIndex(nextIndex, true);
            });
          }}
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={props.classifiedCardStyle}
              onPress={item => props.onPress(item)}>
              <Image
                source={item.image}
                style={props.classifiedImageStyle}
                resizeMode="contain"
              />
              <View style={props.classifiedTitlePrice}>
                <Text style={props.classifiedTitleText}>{item.name}</Text>
                <Text style={props.classifiedPriceText}>{item.price}</Text>
              </View>
              <View></View>
              <Text style={props.classifiedAddressStyle}>{item.address}</Text>
              <View style={styles.classifiedAmenitiesContainer}>
                <View style={props.classifiedAmenities}>
                  <Icon
                    type="font-awesome"
                    name="bed"
                    size={props.amenitiesIconSize}
                    color={colors.white}
                  />
                  <Text style={props.classifiedAmenitiesText}>
                    {item.bedRoom}
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
                    {item.bedRoom}
                  </Text>
                </View>
                <View style={props.classifiedAmenities}>
                  <Text style={props.classifiedAmenitiesText}>
                    {item.bedRoom}Marla
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
          
          renderItem={({item, index}) => (
            <Pressable
              key={index}
              style={props.classifiedCardStyle}
              onPress={item => props.onPress(item)}>
              <Image
                source={item.image}
                style={props.classifiedImageStyle}
                resizeMode="contain"
              />
              <View style={props.classifiedTitlePrice}>
                <Text style={props.classifiedTitleText}>{item.name}</Text>
                <Text style={props.classifiedPriceText}>{item.price}</Text>
              </View>
              <View></View>
              <Text style={props.classifiedAddressStyle}>{item.address}</Text>
              <View style={styles.classifiedAmenitiesContainer}>
                <View style={props.classifiedAmenities}>
                  <Icon
                    type="font-awesome"
                    name="bed"
                    size={props.amenitiesIconSize}
                    color={colors.white}
                  />
                  <Text style={props.classifiedAmenitiesText}>
                    {item.bedRoom}
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
                    {item.bedRoom}
                  </Text>
                </View>
                <View style={props.classifiedAmenities}>
                  <Text style={props.classifiedAmenitiesText}>
                    {item.bedRoom}Marla
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
