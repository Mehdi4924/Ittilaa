import {
  Image,
  ScrollView,
  Share,
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
import {URL} from '../../Constants/URL';
import CustomLoader from '../../Components/CustomLoader';
import Toast from 'react-native-simple-toast';

export default function InventoryDetails(props) {
  const {inventory} = props.route.params;
  console.log('Inventoryyy', inventory);
  const [inventoryData, setInventoryData] = useState();
  const [loading, setLoading] = useState(false);
  const [favorite, setFavorite] = useState(false);
  useFocusEffect(
    React.useCallback(() => {
      checkInventory();
    }, []),
  );
  async function checkInventory() {
    if (inventory.length < 2) {
      setLoading(true);
      Inventories();
    } else {
      setInventoryData(inventory[0]);
    }
  }
  const Inventories = () => {
    AppFlow.InventoryDetails(inventory[0]?.id)
      .then(function (response) {
        console.log('Response getting inventory details', response);
        setInventoryData(response.data.data);
      })
      .catch(function (error) {
        console.log('Error getting inventory details', error);
      })
      .finally(function () {
        setLoading(false);
      });
  };
  const AddFavourite = () => {
    AppFlow.addFavourite(inventory[0]?.id)
      .then(function (response) {
        console.log('Response getting Favourite', response);
        Toast.show(
          response?.data?.message || 'Added To Fav Successfully',
          Toast.SHORT,
        );
      })
      .catch(function (error) {
        console.log('Error getting Favourite', error);
        setFavorite(!favorite);
      });
    // .finally(function () {
    //   // setLoading(false);
    // });
  };
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `${inventoryData?.agency?.name || ''} is having ${
          inventoryData?.type || ''
        } ${inventoryData?.category || ''} For ${
          inventoryData?.purpose || ''
        } at ${inventoryData?.block || ''}, in ${
          inventoryData?.society?.name || ''
        }, ${inventoryData?.city?.name || ''} at ${inventoryData?.price || ''}${
          inventoryData?.price_unit || ''
        }.`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <CustomLoader isLoading={loading} />
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
            <TouchableOpacity onPress={() => onShare()}>
              <Icon
                name={'md-share-social'}
                reverse
                type={'ionicon'}
                color={colors.primary}
                size={hp(2)}
              />
            </TouchableOpacity>
          </View>
          <Image
            source={
              inventoryData?.agency?.file?.file
                ? {uri: URL.imageURL + inventoryData?.agency?.file?.file}
                : allImages.agencydummy
            }
            style={styles.agencyProfileImage}
          />
          <Text style={styles.agencyNameText}>
            {inventoryData?.agency?.name}
          </Text>
          <Text style={styles.postByText}>
            By {inventoryData?.agency?.ceo_name}
          </Text>
          <View style={styles.detailsView}>
            {inventory.length < 2 ? (
              <>
                <View style={styles.callAgentView}>
                  <Text style={styles.normalText}>
                    {inventoryData?.block || 'Loading'}
                  </Text>
                  <Text style={styles.priceText}>
                    {inventoryData?.price || 'Loading'}
                    {''}
                    {inventoryData?.price_unit}
                  </Text>
                </View>
                <Text style={styles.normalText}>
                  {inventoryData?.city?.name || ''}
                </Text>
                <Text style={styles.normalText}>
                  {inventoryData?.size || 'Loading'}{' '}
                  {inventoryData?.size_unit || ''}
                </Text>
                <Text style={styles.normalText}>
                  {inventoryData?.type} {inventoryData?.category}{' '}
                  {inventoryData?.plot_no}
                </Text>
                <Text style={styles.textHighlited}>
                  {' '}
                  {inventoryData?.type} {inventoryData?.category} For{' '}
                  {inventoryData?.purpose || ''}{' '}
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
                    {inventoryData?.block}, {inventoryData?.society?.name},{' '}
                    {inventoryData?.city?.name}
                  </Text>
                </View>
              </>
            ) : (
              <Text style={styles.normalText}>
                {inventory.map(invent => {
                  return (
                    <Text style={styles.text2}>
                      {invent?.category} {invent?.plot_no} is available in{' '}
                      {invent?.block}, {invent?.society?.name},{' '}
                      {invent?.city?.name} at {invent?.price}{' '}
                      {invent?.price_unit} Rupees{'\n'}
                    </Text>
                  );
                })}
              </Text>
            )}
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
              <Text style={styles.phoneNumberText}>
                {inventoryData?.agency?.landline}
              </Text>
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
            onPress={() =>
              props.navigation.navigate('AgencyProfile', {
                agency: {...inventoryData, id: inventoryData.agency_id},
              })
            }>
            <Icon
              name={'md-person-circle-outline'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <Text style={styles.normalText}>Agency Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.bottomIconView}
            onPress={() => {
              setFavorite(!favorite), AddFavourite();
            }}>
            <Icon
              name={favorite ? 'favorite' : 'favorite-border'}
              type={'material'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <Text style={styles.normalText}>Favorite</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.bottomIconView}>
            <Icon
              name={'heart-outline' || 'heart-sharp'}
              type={'ionicon'}
              color={colors.primary}
              size={hp(3)}
              style={{marginRight: wp(3)}}
            />
            <Text style={styles.normalText}>Add to favourite</Text>
          </TouchableOpacity> */}
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
