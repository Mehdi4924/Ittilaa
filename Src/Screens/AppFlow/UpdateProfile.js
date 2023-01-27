import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
  Image,
  ToastAndroid,
} from 'react-native';
import {colors} from '../../Constants/Colors';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';
import {societyItem} from '../../Constants/dummyData';
import {AppFlow, Auth} from '../../Api/ApiCalls';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import CustomDropdown from '../../Components/CustomDropdown';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UpdateProfile(props) {
  const {data} = props?.route?.params;
  useEffect(() => {
    getAgencyDetail();
  }, []);
  const [selectedIndex, setselectedIndex] = useState(0);
  const [dataToSend, setDataToSend] = useState({});
  const [indicator, setIndicator] = useState(false);
  const [logoUri, setLogoUri] = useState('');
  const [logoFileName, setLogoFileName] = useState('');

  const getAgencyDetail = async () => {
    const a = await AsyncStorage.getItem('AuthUser');
    const b = JSON.parse(a);
    AppFlow.getAgencyDetail(data?.id)
      .then(function (response) {
        console.log('Response getting inventory details', response);
        console.log(JSON.stringify({...response.data.data, ...b}, null, 2));
        setDataToSend({...response.data.data, ...b});
        setLogoFileName(response?.data?.data?.file);
      })
      .catch(function (error) {
        console.log('Error getting inventory details', error);
      })
      .finally(function () {
        null;
      });
  };
  const openLogoGallery = () => {
    let options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
    };
    launchImageLibrary(options, response => {
      console.log('Response =', response);
      if (response.didCancel) {
        console.log('User Cancelled image picker');
      } else if (response.error) {
        console.log('Image picker error', response.error);
      } else if (response.btnClick) {
        console.log('User Click button', response.btnClick);
      } else {
        const source = {uri: 'data:image/jpeg;base64' + response.assets};
        console.log('This is URI', response.assets[0].uri);
        setLogoFileName(response.assets[0].uri);
        setLogoUri(response.assets[0]);
      }
    });
  };
  const Register = () => {
    if (dataToSend.agencyName == null) {
      Toast.show('Please Enter agency name', Toast.SHORT);
    } else if (dataToSend.userName == null) {
      Toast.show('Please Enter your name', Toast.SHORT);
    } else if (dataToSend.phone == null) {
      Toast.show('Please Enter phone number', Toast.SHORT);
    } else if (dataToSend.society == null) {
      Toast.show('Please select society', Toast.SHORT);
    } else if (dataToSend.password == null) {
      Toast.show('Please Enter [assword]', Toast.SHORT);
    } else if (dataToSend.confPassword == null) {
      Toast.show('Please confirm password', Toast.SHORT);
    } else if (dataToSend.password != dataToSend.confPassword) {
      Toast.show('Passwords dont match', Toast.SHORT);
    } else if (dataToSend.email == null) {
      Toast.show('Please Enter Email', Toast.SHORT);
    } else if (logoFileName == null) {
      Toast.show('Please select Logo', Toast.SHORT);
    } else {
      setIndicator(true);
      var data = new FormData();
      data.append('agency_name', dataToSend?.agencyName);
      data?.append('name', dataToSend?.userName);
      data?.append('designation', dataToSend?.designation || null);
      data?.append('phone', dataToSend?.phone);
      data?.append('society', dataToSend?.society);
      data?.append('address', dataToSend?.address || null);
      data?.append('ceo_name', dataToSend?.ceoName || null);
      data?.append('ceo_mobile1', dataToSend?.ceoNum1 || null);
      data?.append('ceo_mobile2', dataToSend?.ceoNum2 || null);
      data?.append('landline', dataToSend?.landline || null);
      data?.append('whatapp_no', dataToSend?.whatsapp || null);
      data?.append('email', dataToSend?.email || null);
      data?.append('fax', dataToSend?.fax || null);
      data?.append('facebook', dataToSend?.facebookLink || null);
      data?.append('youtube', dataToSend?.youTubeLink || null);
      data?.append('twitter', dataToSend?.twitterLink || null);
      data?.append('instagram', dataToSend?.instagramLink || null);
      data?.append('message', dataToSend?.message || null);
      data?.append('website', dataToSend?.website || null);
      data?.append('about', dataToSend?.about || null);
      data?.append('password', dataToSend?.password);

      data.append('agency_photo[]', {
        uri: logoUri.uri,
        name: logoUri.fileName,
        type: logoUri.type,
      });
      Auth.registerAgency(data)
        .then(function (response) {
          console.log('Success REgistering', response);
          props.navigation.navigate('Login');
        })
        .catch(function (error) {
          console.log(
            'error registering agency',
            // JSON.stringify(error, null, 2),
            error,
          );
          Toast.show(
            error?.response?.data?.message || 'Error Occured Creating',
            Toast.SHORT,
          );
        })
        .finally(function () {
          setIndicator(false);
        });
    }
  };
  console.log(JSON.stringify(dataToSend, null, 2));

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <TouchableOpacity
            onPress={() => props.navigation.goBack()}
            style={{alignSelf: 'flex-start'}}>
            <Icon
              name={'arrow-left'}
              type={'font-awesome'}
              reverse
              color={colors.primary}
              size={hp(2)}
            />
          </TouchableOpacity>
          <Text style={styles.heading}>Register Your Agency</Text>
          <Text style={styles.registerText}>
            Register your agency to be featured in the app
          </Text>
          <View style={styles.pageNumberView}>
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => setselectedIndex(index)}
                  style={[
                    styles.countingBtn,
                    {
                      backgroundColor:
                        selectedIndex == index
                          ? colors.primary
                          : colors.tertiary,
                    },
                  ]}>
                  <Text
                    style={{
                      color:
                        selectedIndex == index
                          ? colors.white
                          : colors.secondary,
                      fontFamily: fonts.regular,
                      fontSize: hp(2.2),
                    }}>
                    {index + 1}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
          {selectedIndex == 0 ? (
            <>
              <CustomTextInput
                iconName={'home-city-outline'}
                iconType="material-community"
                topText="Agency Name"
                placeholder="Enter Agency Name"
                value={dataToSend.name || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, name: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
              />
              <CustomTextInput
                iconName={'user-plus'}
                iconType="font-awesome"
                topText="Designation"
                placeholder="Enter Designation"
                value={dataToSend.designation || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, designation: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
              <CustomTextInput
                iconName={'phone'}
                iconType="font-awesome"
                topText="Phone"
                placeholder="Enter Phone"
                value={dataToSend.phone || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, phone: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
                editable={true}
                keyboardType="phone-pad"
              />

              <CustomTextInput
                iconName={'location-pin'}
                iconType="entypo"
                topText="Address"
                placeholder="Enter Address"
                value={dataToSend.address || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, address: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
              />
            </>
          ) : selectedIndex == 1 ? (
            <>
              <CustomTextInput
                iconName={'home-city-outline'}
                iconType="material-community"
                topText="CEO Name"
                placeholder="Enter CEO Name"
                value={dataToSend.ceo_name || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, ceo_name: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
              />
              <CustomTextInput
                iconName={'user'}
                iconType="font-awesome"
                topText="CEO Mobile #1"
                placeholder="Enter CEO Mobile #1"
                value={dataToSend.ceo_mobile1 || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, ceo_mobile1: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
                keyboardType="phone-pad"
              />
              <CustomTextInput
                iconName={'user-plus'}
                iconType="font-awesome"
                topText="CEO Mobile #2"
                placeholder="Enter CEO Mobile #2"
                value={dataToSend.ceo_mobile2 || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, ceo_mobile2: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
                keyboardType="phone-pad"
              />
              <CustomTextInput
                iconName={'phone'}
                iconType="font-awesome"
                topText="Landline"
                placeholder="Enter landline"
                value={dataToSend.landline || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, landline: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
                keyboardType="phone-pad"
              />
              <CustomTextInput
                iconName={'whatsapp'}
                iconType="font-awesome"
                topText="Whatsapp"
                placeholder="Enter Whatsapp"
                value={dataToSend.whatapp_no || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, whatapp_no: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
                keyboardType="phone-pad"
              />
              <CustomTextInput
                iconName={'mail-bulk'}
                iconType="font-awesome-5"
                topText="Email"
                placeholder="Enter Email"
                value={dataToSend.email || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, email: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
                keyboardType="email-address"
                editable={true}
              />
              <CustomTextInput
                iconName={'fax'}
                iconType="font-awesome"
                topText="Fax"
                placeholder="Enter Fax"
                value={dataToSend.fax || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, fax: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
            </>
          ) : selectedIndex == 2 ? (
            <>
              <Text style={styles.subHeading}>Social Links</Text>
              <CustomTextInput
                iconName={'facebook-official'}
                iconType="font-awesome"
                topText="Facebook"
                placeholder="Enter Facebook"
                value={dataToSend.facebook || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, facebook: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
              <CustomTextInput
                iconName={'youtube-play'}
                iconType="font-awesome"
                topText="YouTube"
                placeholder="Enter YouTube"
                value={dataToSend.youtube || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, youtube: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
              <CustomTextInput
                iconName={'twitter-square'}
                iconType="font-awesome"
                topText="Twitter"
                placeholder="Enter Twitter"
                value={dataToSend.twitter || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, twitter: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
              <CustomTextInput
                iconName={'instagram'}
                iconType="font-awesome"
                topText="Instagram"
                placeholder="Enter Instagram"
                value={dataToSend.instagram || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, instagram: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
              <Text style={styles.subHeading}>Other</Text>
              <CustomTextInput
                iconName={'envelope-open-text'}
                iconType="font-awesome-5"
                topText="Message"
                placeholder="Enter Message"
                value={dataToSend.message || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, message: t};
                  })
                }
                textInputContainer={{
                  marginVertical: hp(2),
                  height: hp(20),
                }}
                textInputStyles={{textAlignVertical: 'top', height: hp(18)}}
                iconStyles={{marginBottom: hp(12)}}
                iconSize={hp(3.5)}
              />
              <CustomTextInput
                iconName={'web-check'}
                iconType="material-community"
                topText="Website"
                placeholder="Enter Website"
                value={dataToSend.website || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, website: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
              <CustomTextInput
                iconName={'info-circle'}
                iconType="font-awesome"
                topText="About"
                placeholder="Enter About"
                value={dataToSend.about || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, about: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
              />
            </>
          ) : (
            <View style={styles.imagesMainView}>
              <TouchableOpacity
                style={styles.imageContainerView}
                onPress={() => {
                  openLogoGallery();
                }}>
                {logoFileName ? (
                  <Image
                    source={{uri: logoFileName}}
                    style={styles.imageStyle}
                    resizeMode="contain"
                  />
                ) : (
                  <>
                    <Icon
                      name={'file-image-o'}
                      type="font-awesome"
                      color={colors.primary}
                      size={hp(5)}
                      style={props.iconStyles}
                    />
                    <Text style={styles.imageText}>Agency Logo</Text>
                  </>
                )}
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.pageNumberView}>
          <CustomButton
            btnText="Previous"
            indicator={false}
            onPress={() =>
              selectedIndex > 0 ? setselectedIndex(selectedIndex - 1) : null
            }
            btnContainer={styles.btnContainer}
          />
          <CustomButton
            btnText="Next"
            indicator={false}
            onPress={() =>
              selectedIndex < 3 ? setselectedIndex(selectedIndex + 1) : null
            }
            btnContainer={styles.btnContainer2}
            btnTextStyles={{color: colors.black}}
          />
        </View>
        {selectedIndex == 3 ? (
          <CustomButton
            btnText="Submit"
            indicator={indicator}
            onPress={Register}
            btnContainer={styles.submitBtn}
          />
        ) : null}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  btnContainer: {
    width: wp(30),
  },
  heading: {
    color: colors.primary,
    fontSize: hp(2.5),
    fontFamily: fonts.bold,
  },
  registerText: {
    color: colors.secondary,
    fontSize: hp(1.8),
    fontFamily: fonts.regular,
  },
  subHeading: {
    width: wp(90),
    fontFamily: fonts.bold,
    color: colors.black,
  },
  countingBtn: {
    width: wp(12),
    height: wp(12),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  pageNumberView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: wp(90),
    marginVertical: hp(2),
  },
  imagesMainView: {
    width: wp(90),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageContainerView: {
    borderWidth: 1,
    borderRadius: 5,
    width: wp(35),
    height: wp(35),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(3),
  },
  imageStyle: {
    borderWidth: 1,
    borderRadius: 5,
    width: wp(30),
    height: wp(30),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: hp(3),
  },
  imageText: {fontFamily: fonts.regular, fontSize: hp(2), color: colors.grey},
  btnContainer2: {
    width: wp(30),
    backgroundColor: colors.tertiary,
  },
  imageFileName: {
    fontFamily: fonts.regular,
    fontSize: hp(1.5),
    color: colors.grey,
  },

  submitBtn: {
    width: wp(90),
    height: hp(7),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: hp(10),
  },
});