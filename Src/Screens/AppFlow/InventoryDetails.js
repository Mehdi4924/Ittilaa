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

export default function InventoryDetails(props) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Icon
              name={'arrow-back-circle'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(5)}
            />
            <Text style={styles.headingText}>Inventory Details</Text>
            <Icon
              name={'md-share-social'}
              reverse
              type={'ionicon'}
              color={colors.primary}
              size={hp(2)}
            />
          </View>
          <Image source={allImages.tamjeed} style={styles.agencyProfileImage} />
          <Text style={styles.agencyNameText}>IronStone Equities</Text>
          <Text style={styles.postByText}>By Danial Babar</Text>
          <View style={styles.detailsView}>
            <View style={styles.callAgentView}>
              <Text style={styles.normalText}>Bahria Town</Text>
              <Text style={styles.priceText}>RS. 15 Lacs</Text>
            </View>
            <Text style={styles.normalText}>Tulip Extension</Text>
            <Text style={styles.normalText}>05 Marla Plot</Text>
            <Text style={styles.normalText}>
              Plot 672, 8626, PU Paid, 96 Lacs Each
            </Text>
            <Text style={styles.textHighlited}>Commercial Plots For Sale </Text>
            <View style={styles.locationTextView}>
              <Icon
                name={'location'}
                type={'ionicon'}
                color={colors.primary}
                size={hp(3)}
                style={{marginRight: wp(2)}}
              />
              <Text style={styles.normalText}>
                Uni Shopping Centre, 9th Floor, Abdullah Haroon Road Lahore
              </Text>
            </View>
          </View>
          <TouchableOpacity style={styles.bottomIconView}>
            <Icon
              name={'mobile-alt'}
              type={'font-awesome-5'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <View>
              <Text style={styles.normalText}>Call the agent</Text>
              <Text style={styles.phoneNumberText}>033333333333</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomIconView}>
            <Icon
              name={'whatsapp'}
              type={'font-awesome-5'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <Text style={styles.normalText}>Whatsapp the agent</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomIconView}
            onPress={() => props.navigation.navigate('AgencyProfile')}>
            <Icon
              name={'md-person-circle-outline'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <Text style={styles.normalText}>Agency Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomIconView}>
            <Icon
              name={'heart-outline' || 'heart-sharp'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <Text style={styles.normalText}>Add to favourite</Text>
          </TouchableOpacity>
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
    width: hp(15),
    height: hp(15),
    backgroundColor: colors.white,
    borderRadius: hp(7),
  },
  agencyNameText: {
    color: colors.black,
    fontFamily: fonts.regular,
    marginVertical: hp(1),
  },
  postByText: {
    color: colors.grey,
    fontFamily: fonts.regular,
    fontSize: hp(1.5),
  },
  detailsView: {
    width: wp(90),
    borderWidth: 1,
    borderColor: colors.black,
    paddingVertical: hp(2),
    marginVertical: hp(2),
    paddingHorizontal: wp(5),
    borderRadius: 10,
  },
  callAgentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp(80),
    marginVertical: hp(0.5),
  },
  priceText: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: hp(2.2),
  },
  normalText: {
    color: colors.black,
    fontFamily: fonts.regular,
    fontSize: hp(2),
  },
  phoneNumberText: {
    color: colors.grey,
    fontFamily: fonts.regular,
    fontSize: hp(2),
  },
  locationTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(75),
    marginVertical: hp(0.5),
  },
  textHighlited: {
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: hp(2),
    backgroundColor: colors.primary,
    borderRadius: 20,
    width: wp(60),
    textAlignVertical: 'center',
    textAlign: 'center',
    marginVertical: hp(2),
    padding: 3,
  },
  bottomIconView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: wp(80),
    marginVertical: hp(1),
  },
});
