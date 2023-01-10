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
import {URL} from '../Constants/URL';
import EmptyComponent from './EmptyComponent';

export default function TitaniumFlatlist(props) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [maxSlider, setMaxSlider] = useState(props?.data?.length - 1);
  const flatListRef = useRef();
  useEffect(() => {
    props?.data?.length ? listAnimator() : null;
  }, [props?.length]);

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
    props.data.length
      ? flatListRef.current &&
        flatListRef.current.scrollToIndex({index, animated})
      : null;
  }
  return (
    <View style={props.listContainerstyle}>
      <FlatList
        contentContainerStyle={props.flatListStyle}
        horizontal={props.horizontal}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={props.data}
        ref={r => (props.data.length > 0 ? (flatListRef.current = r) : null)}
        keyExtractor={item => item.id}
        ListEmptyComponent={<EmptyComponent emptyContainer={{height: hp(5)}} />}
        onScrollToIndexFailed={info => {
          nextIndex = 0;
          const wait = new Promise(resolve => setTimeout(resolve, 500));
          wait.then(() => {
            props?.data?.length ? scrollToIndex(0, true) : null;
          });
        }}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => props.onPress(item)}
            key={index}
            style={{alignItems: 'center', marginRight: wp(2)}}>
            <View style={props.cardStyle}>
              <Image
                source={
                  item?.file
                    ? {uri: URL.imageURL + item.file.file}
                    : require('../Assets/Images/agency-icon.png')
                }
                style={{width: wp(20), height: wp(20), borderRadius: hp(10)}}
                resizeMode="contain"
              />
            </View>
            <Text style={props.listTitleStyle}>{item?.name || 'Loading'}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
