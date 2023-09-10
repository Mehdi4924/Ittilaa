import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
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
import CustomButton from '../../Components/CustomButton';
import {AppFlow} from '../../Api/ApiCalls';
import CustomLoader from '../../Components/CustomLoader';
import {URL} from '../../Constants/URL';

export default function FeaturedDetails(props) {
  const {data} = props.route.params;
  const [screenData, setScreenData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [featureImages, setfeatureImages] = useState({});
  const [images, setimages] = useState({});
  const [paymentPlanImages, setPaymentPlanImages] = useState([]);
  const [developerLogoImages, setDeveloperLogoImages] = useState([]);
  const [marketedByImages, setMarketedByImages] = useState([])
  const [photo, setPhoto] = useState([])
  useEffect(() => {
    getProjectDetails();
  }, []);
  async function getProjectDetails() {
    AppFlow.getSingleFeatured(data.id)
      .then(async res => {
        console.log(
          // JSON.stringify(res.data, null, 2),
          'respose getting featured details',
          res,
        );

        const imagesData = res?.data?.data?.file || []; // Separate the images by their types
        const paymentPlanImages = imagesData.filter(
          (image) => image.type === 'payment_plan_image'
        );
        const developerLogoImages = imagesData.filter(
          (image) => image.type === 'developer_logo_image'
        );
        const marketedByImages = imagesData.filter(
          (image) => image.type === 'marketed_by_image'
        );
        const photo = imagesData.filter(
          (image) => image.type === 'photo'
        );
        
        setPaymentPlanImages(paymentPlanImages);
        setDeveloperLogoImages(developerLogoImages);
        setMarketedByImages(marketedByImages);
        setPhoto(photo);
        setScreenData(res?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(function () {
        setIsLoading(false);
      });
  }
console.log('images', paymentPlanImages);
  return (
    <View style={styles.container}>
      <CustomLoader isLoading={isLoading} />
      {isLoading ? (
        <ActivityIndicator size={'large'} color={colors.primary} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: hp(5)}}>
          <View style={[styles.container, {marginBottom: wp(5)}]}>
            <Image
              source={{uri: URL.imageURL + photo[0]?.file}}
              style={{width: wp(100), height: hp(40)}}
              resizeMode="cover"
            />

            <View style={styles.header}>
              <TouchableOpacity onPress={() => props.navigation.goBack()}>
                <Icon
                  name={'arrow-back-circle'}
                  type={'ionicon'}
                  color={colors.primary}
                  size={hp(5)}
                />
              </TouchableOpacity>
              <Text style={styles.headingText}>
                {screenData?.data?.title || ''} -{' '}
                {screenData?.data?.developer_name || ''}
              </Text>
              {/* <View style={styles.societyTextView}>
              <Icon
                name={'building-o'}
                type={'font-awesome'}
                color={colors.primary}
                size={hp(2)}
                style={{marginRight: 10}}
              />
              <Text style={styles.townText}>
                {screenData?.data?.society.name || ''}
                {', '}
                {screenData?.data?.address || ''}
              </Text>
            </View> */}
            </View>
            <View style={styles.locationTextView}>
              <Icon
                name={'building-o'}
                type={'font-awesome'}
                color={colors.primary}
                size={hp(2)}
                style={{marginRight: 10}}
              />
              <Text style={styles.locationText}>
                {screenData?.data?.society.name || ''}
                {', '}
                {screenData?.data?.address || ''}
              </Text>
            </View>
            <View style={styles.developersView}>
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: URL.imageURL + developerLogoImages[0]?.file}}
                  style={styles.userImage}
                  resizeMode="contain"
                />
                <Text style={styles.developersText}>
                  {screenData?.data?.title || ''}
                </Text>
              </View>
              <View style={styles.centeralLine} />
              <View style={{alignItems: 'center'}}>
                <Image
                  source={{uri: URL.imageURL + marketedByImages[0]?.file}}
                  style={styles.userImage}
                  resizeMode="contain"
                />
                <Text style={styles.developersText}>
                  {screenData?.data?.developer_name || ''}
                </Text>
              </View>
            </View>

            <Text style={styles.plansText}>Payment Plan</Text>
            <Image
              source={{uri: URL.imageURL + paymentPlanImages[0]?.file}}
              style={{width: wp(90), height: hp(40)}}
              resizeMode="cover"
            />
          </View>
        </ScrollView>
      )}
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
  societyTextView: {
    height: hp(5),
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    borderRadius: hp(8),
    // position: 'absolute',
    // bottom: hp(-26),
    // left: wp(23),
    // zIndex: 100,
  },
  locationText: {
    color: colors.black,
    fontFamily: fonts.regular,
    marginVertical: hp(1),
    fontSize: hp(1.8),
  },
  userImage: {
    width: hp(12),
    height: hp(12),
    borderRadius: hp(8),
    borderWidth: 0.5,
    borderColor: colors.grey,
  },
  developersView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: hp(5),
  },
  developersText: {
    fontSize: hp(1.5),
    marginTop: hp(0.5),
    fontFamily: fonts.bold,
    color: colors.black,
    width:wp(30),
    textAlign:'center'
  },
  centeralLine: {
    height: 2,
    width: wp(30),
    backgroundColor: colors.primary,
  },
  locationTextView: {
    height: hp(5),
    backgroundColor: colors.white,
    elevation: 10,
    marginTop: hp(2),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(5),
    borderRadius: hp(8),
  },
  plansText: {
    color: colors.primary,
    fontFamily: fonts.bold,
    width: wp(85),
    fontSize: hp(2),
    marginVertical: hp(1),
  },
  //list styles
  agencyProfileImage: {
    width: hp(9),
    height: hp(9),
    backgroundColor: colors.white,
    borderRadius: hp(9),
    borderWidth: 1,
    borderColor: colors.primary,
  },
  agencyProfileImage1: {
    width: hp(9),
    height: hp(9),
    borderRadius: hp(7),
    backgroundColor: colors.white,
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: hp(0.5),
    marginHorizontal: wp(1),
    paddingVertical: hp(1),
    paddingHorizontal: wp(1),
    borderRadius: 5,
    elevation: 5,
  },
  listTextView: {
    paddingHorizontal: wp(2),
    justifyContent: 'space-around',
  },
  vendorName: {
    fontFamily: fonts.bold,
    color: colors.primary,
    fontSize: hp(1.5),
  },
  developerName: {
    fontFamily: fonts.regular,
    fontSize: hp(1.5),
  },
  locationView: {flexDirection: 'row', alignItems: 'center'},
  townText: {
    fontFamily: fonts.bold,
    color: colors.black,
    fontSize: hp(1.5),
  },
  priceText: {
    fontFamily: fonts.regular,
    color: colors.grey,
    fontSize: hp(1.5),
  },
});
