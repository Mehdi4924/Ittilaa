import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {hp, wp} from '../Constants/Responsive';

export default function TitaniumFlatlist(props) {
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
    <View style={props.listContainerstyle}>
      <FlatList
        contentContainerStyle={props.flatListStyle}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={props.data}
        keyExtractor={item => item.id}
        ref={r => (flatListRef.current = r)}
        onScrollToIndexFailed={info => {
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            scrollToIndex(nextIndex, true);
          });
        }}
        renderItem={({item, index}) => (
          <View key={index} style={{alignItems: 'center', marginRight: wp(2)}}>
            <View style={props.cardStyle}>
              <Image
                source={item.image}
                style={{width: wp(20), height: hp(10)}}
                resizeMode="contain"
              />
            </View>
            <Text style={props.listTitleStyle}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
