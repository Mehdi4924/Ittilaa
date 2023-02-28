import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';
import {Icon} from '@rneui/themed';
import {FlatList} from 'react-native';
import {AppFlow} from '../../Api/ApiCalls';
import EmptyComponent from '../../Components/EmptyComponent';
import {Pressable} from 'react-native';

export default function MyFavourites(props) {
  const [myFavs, setMyFavs] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetMyFav();
  }, []);

  async function GetMyFav() {
    AppFlow.getFavourites()
      .then(res => {
        console.log('Response getting my favs', res);
        setMyFavs(res?.data?.data);
      })
      .catch(err => {
        console.log('Error getting my favs', err);
      })
      .finally(function () {
        setLoading(false);
      });
  }
  return (
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
        <Text style={styles.headingText}>My Favourites</Text>
        <View style={{width: hp(5)}}></View>
      </View>
      <FlatList
        data={myFavs}
        ListEmptyComponent={<EmptyComponent />}
        renderItem={({item, index}) => {
          return (
            <Pressable
              key={index}
              style={styles.favCard}
              onPress={() => {
                // console.log([item.inventory]);
                props.navigation.navigate('AppFlow', {
                  screen: 'InventoryDetails',
                  params: {inventory: [item.inventory]},
                });
              }}>
              <Icon
                type="material"
                name="favorite"
                size={35}
                color={colors.primary}
              />
              <Text style={styles.favText}>
                {item?.inventory?.type || ''} {item?.inventory?.category || ''}{' '}
                No.
                {item?.inventory?.plot_no || ''} of{' '}
                {item?.inventory?.size || ''} {item?.inventory?.size_unit || ''}{' '}
                availabel for {item?.inventory?.purpose || ''}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
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
  headingText: {color: colors.black, fontFamily: fonts.bold},
  container: {flex: 1, backgroundColor: colors.tertiary, alignItems: 'center'},
  favCard: {
    width: wp(90),
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: wp(5),
    backgroundColor: colors.white,
    paddingVertical: hp(2),
    alignItems: 'center',
    borderRadius: hp(1),
  },
  favText: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.black,
    marginLeft: wp(2),
    maxWidth: wp(72),
  },
});
