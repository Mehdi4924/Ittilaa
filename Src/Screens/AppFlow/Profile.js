import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import {colors} from '../../Constants/Colors';
import {fonts} from '../../Constants/Fonts';
import {color} from '@rneui/base';
import {AppFlow} from '../../Api/ApiCalls';
import CustomLoader from '../../Components/CustomLoader';
import Modal from 'react-native-modal';
import CustomButton from '../../Components/CustomButton';
const dummUri =
  'https://med.gov.bz/wp-content/uploads/2020/08/dummy-profile-pic-300x300.jpg';
export default function Profile(props) {
  const [parseUser, setParseUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);
  useEffect(() => {
    getAgencyDetail();
  }, []);
  const [logoFileName, setLogoFileName] = useState('');
  const getAgencyDetail = async () => {
    const a = await AsyncStorage.getItem('AuthUser');
    const b = JSON.parse(a);
    AppFlow.getAgencyDetail(b?.agency.id)
      .then(function (response) {
        // console.log(
        //   'Response getting agency details',JSON.stringify( response, null, 2))
        setParseUser({
          ...b,
          ...response.data.data,
          agency_name: response?.data?.data?.name,
        });
        if (response?.data?.data?.file.length) {
          setLogoFileName(
            'https://ittelaapp.com/' + response?.data?.data?.file[0]?.file,
          );
        }
      })
      .catch(function (error) {
        console.log('Error getting inventory details', error);
      })
      .finally(function () {
        setIsLoading(false);
      });
  };
  const DeactiveUser = async () => {
    await AppFlow.userDeactive()
      .then(res => {
        console.log('response while de activating user', res);
        AsyncStorage.clear(),
          props.navigation.navigate('AuthStack', {
            screen: 'Login',
            params: {data: {...parseUser, agencyImage: logoFileName}},
          });
      })
      .then(err => {
        console.log('error while de activating user', err);
      });
  };
  return (
    <View style={styles.container}>
      <CustomLoader isLoading={isLoading} />

      <View
        style={[
          styles.header,
          Platform.OS == 'ios' ? {marginTop: hp(5)} : null,
        ]}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon
            name={'arrow-back-circle'}
            type={'ionicon'}
            color={colors.primary}
            size={hp(5)}
          />
        </TouchableOpacity>
        <Text style={styles.headingText}>Agency Profile</Text>
        <TouchableOpacity
          style={styles.editView}
          onPress={() =>
            props.navigation.navigate('UpdateProfile', {data: parseUser})
          }>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      {isLoading ? null : (
        <>
          <View style={{alignItems: 'center'}}>
            <Image
              source={{
                uri: logoFileName != '' ? logoFileName : dummUri,
              }}
              style={styles.imgStyle}
              resizeMode="contain"
            />
            <Text style={styles.profileName}>{parseUser?.name}</Text>
          </View>
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={'mail'}
                type={'meterial'}
                color={colors.primary}
                size={hp(3)}
              />
              <Text style={styles.text}>{parseUser?.email}</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name={'phone'}
                type={'meterial'}
                color={colors.primary}
                size={hp(3)}
              />
              <Text style={styles.text}>{parseUser?.phone}</Text>
            </View>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate('MyFavourites');
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name={'favorite'}
                  type={'meterial'}
                  color={colors.primary}
                  size={hp(3)}
                />
                <Text style={styles.text}>My Favourites</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.itemContainer}>
            <TouchableOpacity
              onPress={() => {
                setDeleteModal(true);
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name={'delete'}
                  type={'meterial'}
                  color={colors.primary}
                  size={hp(3)}
                />
                <Text style={styles.text}>Deactivate Account</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{...styles.itemContainer, marginTop: hp(30)}}>
            <TouchableOpacity
              onPress={() => {
                AsyncStorage.clear(),
                  props.navigation.navigate('AuthStack', {
                    screen: 'Login',
                    params: {data: {...parseUser, agencyImage: logoFileName}},
                  });
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name={'logout'}
                  type={'meterial'}
                  color={colors.primary}
                  size={hp(3)}
                />
                <Text style={styles.text}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}
      <Modal
        animationType="slide"
        // transparent={true}
        visible={deleteModal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setDeleteModal(false);
        }}>
        <View style={styles.modalView}>
          <Text style={styles.text2}>
            Do you want to de active your account?
          </Text>
          <View style={styles.btnsViewCont}>
            <CustomButton
              btnText="Cancel"
              btnContainer={{
                ...styles.btnContainer,
                backgroundColor: colors.grey,
              }}
              btnTextStyles={styles.btnTextStyles}
              onPress={() => setDeleteModal(false)}
            />
            <CustomButton
              btnText="Confirm"
              btnContainer={styles.btnContainer}
              btnTextStyles={styles.btnTextStyles}
              onPress={() => {
                DeactiveUser(), setDeleteModal(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(2),
  },
  headingText: {color: colors.black, fontFamily: fonts.bold},
  profileName: {
    color: colors.black,
    fontFamily: fonts.semiBold,
    fontSize: 16,
    marginTop: hp(1),
  },
  itemContainer: {
    width: wp(90),
    borderBottomWidth: 1,
    borderBottomColor: colors.grey,
    paddingVertical: hp(1),
    marginTop: hp(2),
    backgroundColor: color.white,
  },
  text: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.grey,
    marginLeft: wp(2),
  },
  imgStyle: {
    width: wp(28),
    height: hp(14),
    borderRadius: hp(7),
    borderWidth: 2,
    borderColor: colors.primary,
  },
  editView: {
    backgroundColor: colors.primary,
    paddingVertical: hp(0.5),
    paddingHorizontal: wp(2),
    borderRadius: 4,
  },
  editText: {
    fontFamily: fonts.medium,
    color: colors.white,
  },
  modalView: {
    width: wp(90),
    backgroundColor: colors.white,
    alignSelf: 'center',
    alignItems: 'center',
    paddingHorizontal: wp(3),
    paddingVertical: hp(1.5),
  },
  text2: {
    fontFamily: fonts.semiBold,
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
  },
  btnsViewCont: {
    flexDirection: 'row',
    width: wp(80),
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: hp(2),
  },
  btnContainer: {
    width: wp(35),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  btnTextStyles: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: hp(2.2),
  },
});
