import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {URL} from '../Constants/URL';
import EmptyComponent from './EmptyComponent';
import {hp} from '../Constants/Responsive';

export default function CustomFlatList(props) {
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
          numColumns={props.numColumns}
          showsHorizontalScrollIndicator={false}
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
          renderItem={({item, index}) => (
            <Pressable key={index} onPress={item => props.onPress(item)}>
              <View style={props.featureCard}>
                <Image
                  source={
                    item?.file
                      ? {uri: URL.imageURL + item.file.file}
                      : require('../Assets/Images/feature1.jpg')
                  }
                  style={props.featureImageStyle}
                  resizeMode="contain"
                />
                <Text style={props.featureNameText} numberOfLines={3}>
                  {props?.news
                    ? `${item.description}`
                    : `${item?.agency_name} working with ${item.developer_name}`}
                </Text>
              </View>
            </Pressable>
          )}
        />
      ) : (
        <FlatList
          contentContainerStyle={props.flatListStyle}
          horizontal={props.horizontal}
          numColumns={props.numColumns}
          showsHorizontalScrollIndicator={false}
          data={props.data}
          keyExtractor={item => item.id}
          ListEmptyComponent={
            <EmptyComponent emptyContainer={{height: hp(5)}} />
          }
          renderItem={({item, index}) => (
            <Pressable key={index} onPress={() => props.onPress(item)}>
              <View style={props.featureCard}>
                <Image
                  source={
                    item?.file
                      ? {uri: URL.imageURL + item.file.file}
                      : require('../Assets/Images/feature1.jpg')
                  }
                  style={props.featureImageStyle}
                  resizeMode="contain"
                />
                <Text style={props.featureNameText} numberOfLines={3}>
                  {props?.news
                    ? `${item.description}`
                    : `${item?.title} working with ${item.developer_name}`}
                </Text>
              </View>
            </Pressable>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
