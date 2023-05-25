import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import CustomLoader from '../../../Components/CustomLoader';
import {useState} from 'react';
import {colors} from '../../../Constants/Colors';
import {hp, wp} from '../../../Constants/Responsive';
import {fonts} from '../../../Constants/Fonts';
import {Icon} from '@rneui/base';
import CustomTextInput from '../../../Components/CustomTextInput';
import CustomButton from '../../../Components/CustomButton';
import Toast from 'react-native-simple-toast';

export default function AddAgencyDetails(props) {
  const prevData = props.route.params.data;
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  return (
    <SafeAreaView style={styles.mainContainer}>
      <CustomLoader isLoading={isLoading} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{alignItems: 'center'}}>
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

          <Text style={styles.stepText}>Add Image: Step 3</Text>
          <CustomTextInput
            iconName={'business'}
            iconType="material"
            iconSize={hp(2.7)}
            topText="Agency Name"
            placeholder="Enter Agency Name"
            value={data?.agencyName || ''}
            onChangeText={t =>
              setData(p => {
                return {...p, agencyName: t};
              })
            }
            textInputContainer={{marginVertical: hp(2)}}
          />
          <CustomTextInput
            iconName={'perm-identity'}
            iconType="material"
            iconSize={hp(2.7)}
            topText="Agent Name"
            placeholder="Agent Name"
            value={data?.agentName || ''}
            onChangeText={t =>
              setData(p => {
                return {...p, agentName: t};
              })
            }
            textInputContainer={{marginVertical: hp(2)}}
          />
          <CustomTextInput
            iconName={'phone'}
            iconType="material"
            iconSize={hp(2.7)}
            topText="Agent Number"
            placeholder="Enter Agent Number"
            keyboardType={'decimal-pad'}
            value={data?.agentNumber || ''}
            onChangeText={t =>
              setData(p => {
                return {...p, agentNumber: t};
              })
            }
            textInputContainer={{marginVertical: hp(2)}}
          />
        </View>
        <CustomButton
          btnContainer={{...styles.submitBtnContainer, alignSelf: 'center'}}
          btnText="Next"
          btnTextStyles={styles.btnTextStyles}
          indicator={false}
          onPress={() => {
            if (!data?.agencyName || data?.agencyName == '') {
              Toast.show('Please Enter Agency Name', Toast.SHORT);
            } else if (!data?.agentName || data?.agentName == '') {
              Toast.show('Please Enter Agent Name', Toast.SHORT);
            } else if (!data?.agentNumber || data?.agentNumber == '') {
              Toast.show('Please Enter Agent Number', Toast.SHORT);
            } else {
              props.navigation.navigate('MyAd', {data: {...prevData, ...data}});
            }
          }}
          disabled={false}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(90),
    marginVertical: hp(2),
  },
  headingText: {color: colors.black, fontFamily: fonts.bold},
  stepText: {color: colors.primary, fontFamily: fonts.bold},
  textInputContainer: {
    width: wp(90),
    height: hp(8),
    justifyContent: 'flex-start',
    paddingHorizontal: wp(5),
    borderRadius: 5,
    borderWidth: 1,
    marginTop: hp(2),
    height: hp(30),
  },
  textInputStyles: {
    width: wp(78),
    fontFamily: fonts.regular,
    textAlignVertical: 'top',
  },
  submitBtnContainer: {
    width: wp(80),
    height: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    marginTop: hp(6),
  },
  btnTextStyles: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.5),
    color: colors.white,
  },
});
