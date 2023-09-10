import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';
import {hp, wp} from '../Constants/Responsive';
import {useRef} from 'react';
import {URL} from '../Constants/URL';
import {colors} from '../Constants/Colors';
import {Icon} from '@rneui/themed';

export default function BannerCrousal(props) {
  console.log('banner', props.data);
  const carouselRef = useRef();
  const _renderItem = ({item, index}) => {
    return (
      <View style={{marginTop: hp(30), alignSelf: 'center'}}>
        
        <Image
          source={{uri: URL.imageURL + item?.file}}
          style={{
            width: wp(90),
            height: hp(30),
            borderWidth: 1,
            borderColor: colors.primary,
            borderRadius: hp(1),
          }}
          resizeMode="cover"
        />
      </View>
    );
  };
  return (
    <View style={styles.bannerContainer}>
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
        autoplayInterval={3000}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width:wp(100),height:hp(100),
    backgroundColor:colors.white
  },
  // closeBtn: {
  //   width: wp(12),
  //   height: wp(12),
  //   borderRadius: wp(10),
  //   backgroundColor: colors.primary,
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   position: 'absolute',
  //   top: hp(-10),
  //   right: wp(4),
  //   zIndex:1
  // },
});
