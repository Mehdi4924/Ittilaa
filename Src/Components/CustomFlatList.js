import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';

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
      <FlatList
        contentContainerStyle={props.flatListStyle}
        horizontal={props.horizontal}
        numColumns={props.numColumns}
        showsHorizontalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        ref={r => (flatListRef.current = r)}
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
                    ? {uri: item.file}
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
    </View>
  );
}

const styles = StyleSheet.create({});
