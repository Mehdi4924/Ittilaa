import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableOpacityBase,
} from 'react-native';
import {colors} from '../../Constants/Colors';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';
import CustomTextInput from '../../Components/CustomTextInput';
import CustomButton from '../../Components/CustomButton';
import axios from 'axios';
import {URL} from '../../Constants/URL';
export default function RegisterAgency(props) {
  const [selectedIndex, setselectedIndex] = useState(0);
  const [dataToSend, setDataToSend] = useState({});
  const [indicator, setIndicator] = useState(false);

  const Register = () => {
    setIndicator(true);
    var data = new FormData();
    
    const FormData = new FormData()
    FormData.append('agency_name', dataToSend.agencyName)
    FormData.append('name', dataToSend.userName)
    FormData.append('designation', dataToSend.designation)
    FormData.append('phone', dataToSend.phone)
    FormData.append('society', dataToSend.society)
    FormData.append('address', dataToSend.address)
    FormData.append('ceo_name', dataToSend.ceoName)
    FormData.append('ceo_mobile1', dataToSend.ceoNum1)
    FormData.append('ceo_mobile2', dataToSend.ceoNum2)
    FormData.append('landline', dataToSend.landline)
    FormData.append('whatapp_no', dataToSend.whatsapp)
    FormData.append('email', dataToSend.email)
    FormData.append('fax', dataToSend.fax)
    FormData.append('facebook', dataToSend.facebookLink)
    FormData.append('youtube', dataToSend.youTubeLink)
    FormData.append('twitter', dataToSend.twitterLink)
    FormData.append('instagram', dataToSend.instagramLink)
    FormData.append('message', dataToSend.message)
    FormData.append('website', dataToSend.website)
    FormData.append('about', dataToSend.about)
    axios
      .post(URL.baseURL + 'auth/register', data, {
        Headers: {'Content-Type': 'multipart/form-data'},
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error.response, null, 2);
      })
      .finally(function () {
        setIndicator(false);
      });
  };

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
                value={dataToSend.agencyName || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, agencyName: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
              />
              <CustomTextInput
                iconName={'user'}
                iconType="font-awesome"
                topText="Name"
                placeholder="Enter Your Name"
                value={dataToSend.userName || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, userName: t};
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
              />
              <CustomTextInput
                iconName={'users'}
                iconType="font-awesome"
                topText="Select Society"
                placeholder="Enter Select Society"
                value={dataToSend.society || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, society: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
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
                value={dataToSend.ceoName || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, ceoName: t};
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
                value={dataToSend.ceoNum1 || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, ceoNum1: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
              />
              <CustomTextInput
                iconName={'user-plus'}
                iconType="font-awesome"
                topText="CEO Mobile #2"
                placeholder="Enter CEO Mobile #2"
                value={dataToSend.ceoNum2 || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, ceoNum2: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(3.5)}
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
              />
              <CustomTextInput
                iconName={'whatsapp'}
                iconType="font-awesome"
                topText="Whatsapp"
                placeholder="Enter Whatsapp"
                value={dataToSend.whatsapp || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, whatsapp: t};
                  })
                }
                textInputContainer={{marginVertical: hp(2)}}
                iconSize={hp(4)}
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
                value={dataToSend.facebookLink || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, facebookLink: t};
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
                value={dataToSend.youTubeLink || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, youTubeLink: t};
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
                value={dataToSend.twitterLink || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, twitterLink: t};
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
                value={dataToSend.instagramLink || ''}
                onChangeText={t =>
                  setDataToSend(prev => {
                    return {...prev, instagramLink: t};
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
              <TouchableOpacity style={styles.imageContainerView}>
                <Icon
                  name={'camera'}
                  type="font-awesome"
                  color={colors.primary}
                  size={hp(5)}
                  style={props.iconStyles}
                />
                <Text style={styles.imageText}>Photo</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageContainerView}>
                <Icon
                  name={'file-image-o'}
                  type="font-awesome"
                  color={colors.primary}
                  size={hp(5)}
                  style={props.iconStyles}
                />
                <Text style={styles.imageText}>Agency Logo</Text>
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
        <CustomButton
          btnText="Submit"
          indicator={indicator}
          onPress={Register}
          btnContainer={styles.submitBtn}
        />
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
  imageText: {marginVertical: hp(1), fontFamily: fonts.regular},
  btnContainer2: {
    width: wp(30),
    backgroundColor: colors.tertiary,
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
