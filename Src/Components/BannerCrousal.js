import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {hp, wp} from '../Constants/Responsive';
import {useRef} from 'react';
import {URL} from '../Constants/URL';
import { colors } from '../Constants/Colors';

export default function BannerCrousal(props) {
  console.log('banner', props.data);
  const carouselRef = useRef();
  const _renderItem = ({item, index}) => {
    return (
      <View style={{marginTop:hp(2), alignSelf:'center'}}>
        <Image
          source={{uri: URL.imageURL + item?.file}}
          style={{width: wp(90), height: hp(15), borderWidth:1, borderColor:colors.primary, borderRadius:hp(1)}}
          resizeMode="contain"
        />
      </View>
    );
  };
  return (
    <View>
      <Carousel
        ref={c => {
          carouselRef.current = c;
        }}
        data={props.data}
        // data={
        //       props.data
        //         ? [URL.imageURL + props?.data[0]?.file]
        //         : [allImages.homeImage]
        //     }
        renderItem={_renderItem}
        sliderWidth={wp(100)}
        itemWidth={wp(100)}
        autoplay={true}
        loop={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
