import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../../Constants/Colors';
import {Icon} from '@rneui/themed';
import {hp, wp} from '../../Constants/Responsive';
import {allImages} from '../../Constants/Images';
import {fonts} from '../../Constants/Fonts';
import {AppFlow} from '../../Api/ApiCalls';
import {useFocusEffect} from '@react-navigation/native';

export default function InventoryDetails(props) {
  const {inventory} = props.route.params;
  console.log('data', inventory);
  const [inventoryData, setInventoryData] = useState();
  useFocusEffect(
    React.useCallback(() => {
      Inventories();
    }, []),
  );

  const Inventories = () => {
    AppFlow.InventoryDetails(inventory.agency_id)
      .then(function (response) {
        console.log('Response data', response);
        setInventoryData(response.data.data);
      })
      .catch(function (error) {
        console.log('Inventories Error', error.response);
      });
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => props.navigation.goBack()}>
              <Icon
                name={'arrow-back-circle'}
                type={'ionicon'}
                color={colors.primary}
                size={hp(5)}
              />
            </TouchableOpacity>
            <Text style={styles.headingText}>Inventory Details</Text>
            <Icon
              name={'md-share-social'}
              reverse
              type={'ionicon'}
              color={colors.primary}
              size={hp(2)}
            />
          </View>
          <Image
            source={
              inventoryData?.file
                ? {uri: inventoryData.file}
                : allImages.agencydummy
            }
            style={styles.agencyProfileImage}
          />
          <Text style={styles.agencyNameText}>Test Agency</Text>
          <Text style={styles.postByText}>By Muhammad Atif</Text>
          <View style={styles.detailsView}>
            <View style={styles.callAgentView}>
              <Text style={styles.normalText}>
                {inventoryData?.block || 'Loading'}
              </Text>
              <Text style={styles.priceText}>
                RS. {inventoryData?.price || 'Loading'}{' '}
                {inventoryData?.price_unit}
              </Text>
            </View>
            <Text style={styles.normalText}>Bahria Town</Text>
            <Text style={styles.normalText}>
              {inventoryData?.size || 'Loading'}{' '}
              {inventoryData?.size_unit || ''}
            </Text>
            <Text style={styles.normalText}>
              {inventoryData?.type} Plot {inventoryData?.plot_no}
            </Text>
            <Text style={styles.textHighlited}>
              {' '}
              {inventoryData?.type} Plots For Sale{' '}
            </Text>
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
