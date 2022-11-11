import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../Constants/Colors';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import {allImages} from '../../Constants/Images';
import {fonts} from '../../Constants/Fonts';

export default function AgencyProfile() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              name={'arrow-back-circle'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(5)}
            />
            <Text style={styles.headingText}>Agency Details</Text>
            <View></View>
          </View>
          <View
            style={{
              width: wp(90),
              height: hp(15),
              backgroundColor: colors.white,
              borderRadius: 5,
              elevation: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: hp(2),
              paddingHorizontal: wp(5),
            }}>
            <Image
              source={allImages.tamjeed}
              style={styles.agencyProfileImage}
            />
            <View style={{marginLeft: wp(5)}}>
              <Text style={styles.agencyNameText}>IronStone Equities</Text>
              <Text style={styles.postByText}>By Danial Babar</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
                
            </View>
          </View>
        </View>
      </ScrollView>
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
  agencyProfileImage: {
    width: hp(10),
    height: hp(10),
    backgroundColor: colors.white,
    borderRadius: hp(7),
    borderWidth: 1,
    borderColor: colors.black,
  },
  agencyNameText: {
    color: colors.black,
    fontFamily: fonts.bold,
    marginVertical: hp(0.5),
    fontSize: hp(1.8),
  },
  postByText: {
    color: colors.grey,
    fontFamily: fonts.regular,
    fontSize: hp(1.8),
  },
});
