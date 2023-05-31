import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../../Constants/Responsive';
import {fonts} from '../../../Constants/Fonts';
import {colors} from '../../../Constants/Colors';
import CustomButton from '../../../Components/CustomButton';
import ViewShot from 'react-native-view-shot';
import FileDownloader from '../../../Constants/FileDownloader';
import Toast from 'react-native-simple-toast';
import ColorPicker from 'react-native-wheel-color-picker';

export default function MyAd(props) {
  const {data} = props.route.params;
  const viewRef = useRef();
  const [BG, setBG] = useState(colors.tertiary);
  function captureView() {
    viewRef.current
      .capture()
      .then(result => {
        FileDownloader(result, error => {
          console.log('completed', error);
          if (error.error) {
            Toast.show('File Not Downloaded', Toast.SHORT);
          } else {
            Toast.show('File Downloaded In Gallery', Toast.SHORT);
          }
        });
      })
      .catch(err => {
        console.log(err);
      });
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Icon
              name={'arrow-back-circle'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(5)}
            />
          </TouchableOpacity>
          <Text style={styles.headingText}>Create Ad</Text>
          <View style={{width: hp(5)}}></View>
        </View>
        <ViewShot
          ref={viewRef}
          style={[
            styles.viewShotStyles,
            {
              backgroundColor: BG,
            },
          ]}>
          <View style={styles.adBorder}>
            <View style={styles.mainImageContainer}>
              <Image
                source={
                  data?.inventoryImage?.uri
                    ? {uri: data?.inventoryImage?.uri}
                    : require('../../../Assets/Images/news1.jpg')
                }
                style={styles.bgImageStyle}
                resizeMode="cover"
              />
              <Image
                source={
                  data?.logoImage?.uri
                    ? {uri: data?.logoImage?.uri}
                    : require('../../../Assets/Images/logo.png')
                }
                style={styles.logoImageStyle}
                resizeMode="cover"
              />
            </View>
            <View style={{marginTop: hp(5), alignItems: 'center'}}>
              <Text style={styles.titleText}>{data?.title}</Text>
              <Text style={styles.subHeading}>Description</Text>
              <Text style={styles.description}>{data?.description}</Text>
              <Text style={{...styles.subHeading, marginBottom: hp(1)}}>
                Project Details
              </Text>
              <View style={styles.informationContainer}>
                <View style={styles.boxContainer}>
                  <View style={styles.box}>
                    <Icon
                      type="material"
                      name="fullscreen"
                      size={hp(3)}
                      color={colors.primary}
                    />
                    <Text style={styles.itemText}>
                      {data?.landArea} {data?.areaUnit?.name}
                    </Text>
                  </View>
                  <View style={styles.box}>
                    <Icon
                      type="material"
                      name="fullscreen-exit"
                      size={hp(3)}
                      color={colors.primary}
                    />
                    <Text style={styles.itemText}>{data?.type?.name}</Text>
                  </View>
                  <View style={styles.box}>
                    <Icon
                      type="material"
                      name="fit-screen"
                      size={hp(3)}
                      color={colors.primary}
                    />
                    <Text style={styles.itemText}>{data?.subType?.name}</Text>
                  </View>
                </View>
              </View>
              <View style={styles.priceMainView}>
                <View style={styles.innerView1}>
                  <Text style={styles.priceTitle}>Price</Text>
                </View>
                <View style={styles.innerView2}>
                  <Text style={styles.priceText}>RS: {data?.price}</Text>
                </View>
              </View>

              {/* <View style={styles.contactCont}>
              <Icon
                type="material"
                name="phone"
                size={hp(3)}
                color={colors.primary}
              />
              <Text style={styles.text}>{data.agentNumber}</Text>
            </View> */}
              <View style={{marginTop: hp(1), alignItems: 'center'}}>
                <Text style={styles.agencyName}>{data.agencyName}</Text>
                <View
                  style={{
                    width: wp(90),
                    flexDirection: 'row',
                    justifyContent: 'center',
                  }}>
                  <View style={styles.agentContainer}>
                    <Icon
                      type="material"
                      name="person"
                      size={hp(2.3)}
                      color={colors.primary}
                    />
                    <Text style={styles.text}>{data?.agentName}</Text>
                  </View>
                  <View style={styles.agentContainer}>
                    <Icon
                      type="material"
                      name="phone"
                      size={hp(2.3)}
                      color={colors.primary}
                    />
                    <Text style={styles.text}>{data?.agentNumber}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.locationCont}>
                <Icon
                  type="material"
                  name="my-location"
                  size={hp(2.3)}
                  color={colors.white}
                />
                <Text style={{...styles.text, color: colors.white}}>
                  {data?.address}
                </Text>
              </View>
              <View style={{marginTop: hp(1), alignItems: 'center'}}>
                <Text style={styles.text}>Powerd By:</Text>
                <Image
                  source={require('../../../Assets/Images/logo.png')}
                  style={styles.ittilaaLogo}
                  resizeMode="cover"
                />
              </View>
            </View>
          </View>
        </ViewShot>
        <Text style={styles.selectBgText}>Select Background</Text>
        <View style={{width: wp(80)}}>
          <ColorPicker
            color={'#ffffff'}
            swatchesOnly={false}
            onColorChange={color => setBG(color)}
            onColorChangeComplete={color => console.log(color)}
            thumbSize={40}
            sliderSize={40}
            noSnap={true}
            row={true}
            swatchesLast={false}
            swatches={true}
            discrete={true}
          />
        </View>

        <CustomButton
          btnContainer={{...styles.submitBtnContainer}}
          btnText="Download"
          btnTextStyles={styles.btnTextStyles}
          indicator={false}
          onPress={() => captureView()}
          disabled={false}
        />
        <View style={{height: hp(10)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(2),
  },
  headingText: {
    color: colors.white,
    fontFamily: fonts.bold,
    backgroundColor: colors.primary,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.2),
    borderRadius: hp(0.5),
  },
  viewShotStyles: {
    width: wp(100),
    alignItems: 'center',
    paddingVertical: hp(2),
  },
  mainImageContainer: {
    width: wp(90),
    height: hp(25),
    borderRadius: hp(2),
    backgroundColor: '#DB5265',
  },
  logoImageStyle: {
    width: wp(24),
    height: hp(12),
    borderRadius: hp(6),
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp(-5),
    backgroundColor: colors.white,
    borderWidth: hp(0.3),
    borderColor: colors.white,
  },
  bgImageStyle: {
    width: wp(90),
    height: hp(25),
    borderRadius: hp(2),
    borderWidth: hp(0.3),
    borderColor: colors.primary,
  },
  titleText: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: 16,
  },
  subHeading: {
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 14,
    backgroundColor: colors.primary,
    paddingHorizontal: wp(3),
    paddingVertical: hp(0.1),
    borderRadius: hp(0.5),
  },
  description: {
    color: colors.secondary,
    fontFamily: fonts.regular,
    fontSize: 10,
    width: wp(90),
    textAlign: 'center',
  },
  informationContainer: {
    width: wp(70),
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderBottomColor: colors.primary,
    borderTopColor: colors.primary,
    paddingVertical: hp(1),
    alignItems: 'center',
    borderStyle: 'dashed',
  },
  boxContainer: {
    width: wp(75),
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
  box: {
    width: wp(24),
    minHeight: hp(6),
    borderRadius: hp(0.5),
    // backgroundColor:colors.primary
    borderWidth: 1.5,
    borderColor: colors.primary,
    alignItems: 'center',
  },
  itemText: {
    color: colors.black,
    fontFamily: fonts.medium,
    fontSize: 10,
  },
  priceMainView: {
    flexDirection: 'row',
    width: wp(70),
    height: hp(5),
    borderRadius: hp(1),
    borderWidth: 2,
    borderColor: colors.primary,
    alignItems: 'center',
    marginTop: hp(1),
  },
  innerView1: {
    width: wp(25),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderTopLeftRadius: hp(1),
    borderBottomLeftRadius: hp(1),
  },
  priceTitle: {
    color: colors.white,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  innerView2: {
    width: wp(45),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceText: {
    color: colors.secondary,
    fontFamily: fonts.medium,
    fontSize: 14,
  },
  locationCont: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: hp(1),
    width: wp(70),
    backgroundColor: colors.secondary,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(1),
    borderRadius: hp(1),
  },
  contactCont: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginTop: hp(2),
    width: wp(70),
  },
  text: {
    color: colors.secondary,
    fontFamily: fonts.regular,
    fontSize: 10,
    marginLeft: wp(1),
  },
  ittilaaLogo: {
    width: wp(21),
    height: hp(3),
  },
  selectBgText: {
    fontFamily: fonts.bold,
    color: colors.primary,
    marginTop: hp(2),
  },
  backgroundSelecterView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: wp(70),
    marginVertical: hp(2),
  },
  backgroundSelecter: {
    width: wp(7),
    height: wp(7),
    borderWidth: 1,
    borderColor: colors.black,
    borderRadius: wp(8),
    marginHorizontal: wp(3),
    marginVertical: hp(1),
  },
  submitBtnContainer: {
    width: wp(80),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: hp(4),
  },
  btnTextStyles: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.5),
    color: colors.white,
  },
  agentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(2),
  },
  agencyName: {
    color: colors.primary,
    fontFamily: fonts.bold,
    fontSize: 14,
  },
  adBorder: {
    width: wp(95),
    borderWidth: 2,
    borderColor: '#CDC9C9',
    paddingVertical: hp(1),
    alignItems: 'center',
    borderRadius: hp(1),
  },
});
