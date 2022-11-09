import React, {useRef} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors} from '../../Constants/Colors';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import {allImages} from '../../Constants/Images';
import {fonts} from '../../Constants/Fonts';
import Carousel from 'react-native-snap-carousel';

export default function ClassifiedDetails(props) {
  const carouselRef = useRef();
  const _renderItem = ({item, index}) => {
    console.log(item);
    return (
      <View style={styles.slide}>
        <Image source={{uri: item}} style={{width: wp(100), height: hp(30)}} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <Carousel
            ref={c => {
              carouselRef.current = c;
            }}
            data={[
              allImages.homeImage,
              allImages.homeImage,
              allImages.homeImage,
            ]}
            renderItem={_renderItem}
            sliderWidth={wp(100)}
            itemWidth={wp(100)}
            autoplay={true}
            loop={true}
          />
          <View style={styles.bothChevronsView}>
            <TouchableOpacity
              onPress={() => carouselRef.current.snapToPrev()}
              style={styles.chevron}>
              <Icon
                name={'chevron-back-circle-outline'}
                type={'ionicon'}
                color={colors.white}
                size={hp(2)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => carouselRef.current.snapToNext()}
              style={styles.chevron}>
              <Icon
                name={'chevron-forward-circle-outline'}
                type={'ionicon'}
                color={colors.white}
                size={hp(2)}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.header}>
            <TouchableOpacity>
              <Icon
                name={'arrow-back-circle'}
                type={'ionicon'}
                color={colors.primary}
                size={hp(5)}
              />
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity>
                <Text style={styles.headingText}>Inventory Details</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.shareIconStyles}>
                <Icon
                  name={'md-share-social'}
                  type={'ionicon'}
                  color={colors.white}
                  size={hp(1.5)}
                />
              </TouchableOpacity>
            </View>
            <Image source={allImages.user} style={styles.userImage} />
          </View>
          <View style={styles.locationPinView}>
            <Icon
              name={'location'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(3)}
            />
          </View>
          <Text style={styles.locationText}>
            Sector C, Tulip Block, Bahria Town, Lahore
          </Text>
          <View
            style={{
              backgroundColor: colors.black,
              width: wp(80),
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: wp(3),
              paddingVertical: hp(1),
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon
                name={'location'}
                type={'ionicon'}
                color={colors.primary}
                size={hp(3)}
              />
              <Text style={styles.amenitiesText}>3 Marla</Text>
            </View>
            <View style={styles.seperator}></View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  bothChevronsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(95),
    position: 'absolute',
    top: hp(12),
  },
  chevron: {
    backgroundColor: colors.black,
    padding: 5,
    borderRadius: 15,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    position: 'absolute',
    top: hp(2),
  },
  headingText: {
    color: colors.white,
    fontFamily: fonts.regular,
    padding: 5,
    backgroundColor: '#2726267D',
    borderRadius: 40,
    paddingHorizontal: 10,
    marginRight: wp(3),
  },
  shareIconStyles: {
    padding: 10,
    backgroundColor: '#2726267D',
    borderRadius: 20,
  },
  userImage: {
    width: hp(15),
    height: hp(15),
    borderRadius: hp(8),
    position: 'absolute',
    bottom: hp(-30),
    right: wp(32),
    zIndex: 100,
  },
  locationPinView: {
    elevation: 10,
    marginTop: hp(9),
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 20,
  },
  amenitiesText: {
    color: colors.white,
    fontFamily: fonts.regular,
    marginLeft: wp(2),
    fontSize: hp(1.8),
  },
  locationText: {
    color: colors.black,
    fontFamily: fonts.regular,
    marginVertical: hp(1),
    fontSize: hp(1.8),
  },
  seperator: {
    width: 2,
    height: hp(3),
    backgroundColor: colors.white,
  },
});
