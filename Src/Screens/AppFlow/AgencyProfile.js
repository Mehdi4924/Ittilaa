import {
  ActivityIndicator,
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
import CustomButton from '../../Components/CustomButton';
import {AppFlow} from '../../Api/ApiCalls';

export default function AgencyProfile(props) {
  const {agency} = props.route.params;
  const [agencyData, setAgencyData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    getAgencyDetails();
  }, []);
  async function getAgencyDetails() {
    setIsLoading(true);
    AppFlow.getAgencyDetail(agency?.id)
      .then(res => {
        console.log(res);
        setAgencyData(res?.data?.data);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }
  console.log('agency details', agencyData);
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
            <Text style={styles.headingText}>Agency Details</Text>
            <View></View>
          </View>
          {!isLoading ? (
            <>
              <View style={styles.topMainView}>
                <Image
                  source={
                    agencyData?.file
                      ? {uri: agencyData?.file}
                      : allImages.agencydummy
                  }
                  style={styles.agencyProfileImage}
                />
                <View style={{marginLeft: wp(5), marginBottom: hp(1.5)}}>
                  <Text style={styles.agencyNameText}>
                    {agencyData?.name || 'Loading'}
                  </Text>
                  <Text style={styles.postByText}>
                    By {agencyData?.ceo_name || 'Loading'}
                  </Text>
                </View>
                <View style={styles.topTextView}>
                  <TouchableOpacity>
                    <Image
                      source={allImages.call}
                      style={{width: hp(4), height: hp(4)}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      source={allImages.whatsapp}
                      style={{width: hp(4), height: hp(4)}}
                    />
                  </TouchableOpacity>
                  <CustomButton
                    btnText="Properties"
                    indicator={false}
                    onPress={() =>
                      props.navigation.navigate('AgencyProperties', {id:agencyData.id})}
                    btnContainer={styles.btnContainer}
                    btnTextStyles={styles.btnTextStyles}
                  />
                </View>
              </View>
              <Text style={styles.descText}>Location</Text>
              <Text style={styles.descDetailsText}>
                {agencyData?.address || 'Loading'}{' '}
              </Text>
              <Image
                source={allImages.map}
                style={{height: hp(25), width: wp(85), marginVertical: hp(1)}}
              />
              <Text style={styles.connectionsText}>Social Connections</Text>
              <View style={{flexDirection: 'row'}}>
                <Image source={allImages.call} style={styles.socialIcon} />
                <Image source={allImages.call} style={styles.socialIcon} />
                <Image source={allImages.call} style={styles.socialIcon} />
                <Image source={allImages.call} style={styles.socialIcon} />
                <Image source={allImages.call} style={styles.socialIcon} />
              </View>
              <View style={styles.seperator} />
              <Text style={[styles.connectionsText, {marginVertical: hp(2)}]}>
                Team
              </Text>
              {[agencyData?.team || {name: 'Loading'}].map((item, index) => {
                return (
                  <View style={styles.listMainView} key={index}>
                    <Image
                      source={allImages.tamjeed}
                      style={styles.teamAgentProfile}
                    />
                    <View style={styles.listNameView}>
                      <View style={{justifyContent: 'space-around'}}>
                        <Text style={styles.agentNameText}>
                          {item?.name || 'Loading'}
                        </Text>
                        <Text style={styles.agentDesgText}>
                          {item?.role || 'Loading'}
                        </Text>
                      </View>
                      <View style={styles.topTextView}>
                        <TouchableOpacity>
                          <Image
                            source={allImages.call}
                            style={{width: hp(7), height: hp(7)}}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity>
                          <Image
                            source={allImages.whatsapp}
                            style={{width: hp(7), height: hp(7)}}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                );
              })}
            </>
          ) : (
            <View style={styles.indicator}>
              <ActivityIndicator size={'small'} color={colors.primary} />
            </View>
          )}
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
  topMainView: {
    width: wp(90),
    height: hp(18),
    backgroundColor: colors.white,
    borderRadius: 5,
    elevation: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: hp(2),
    paddingHorizontal: wp(5),
  },
  topTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: wp(5),
    bottom: hp(1),
  },
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
  btnContainer: {
    width: wp(22),
    height: hp(3),
    backgroundColor: colors.black,
    borderRadius: hp(6),
    marginVertical: hp(0.5),
  },
  btnTextStyles: {
    fontFamily: fonts.regular,
    color: colors.white,
    fontSize: hp(1.3),
  },
  descText: {
    color: colors.primary,
    fontFamily: fonts.bold,
    width: wp(85),
    fontSize: hp(2),
    marginVertical: hp(2),
  },
  descDetailsText: {
    color: colors.black,
    fontFamily: fonts.regular,
    width: wp(85),
    fontSize: hp(1.8),
  },
  connectionsText: {
    color: colors.black,
    fontFamily: fonts.bold,
    fontSize: hp(2),
  },
  socialIcon: {width: hp(4), height: hp(4), marginHorizontal: wp(2)},
  teamAgentProfile: {
    width: hp(10),
    height: hp(10),
    backgroundColor: colors.white,
    borderRadius: hp(7),
  },
  listMainView: {
    width: wp(90),
    flexDirection: 'row',
    marginVertical: hp(1),
  },
  listNameView: {
    width: wp(75),
    flexDirection: 'row',
    marginVertical: hp(1),
    paddingHorizontal: wp(2),
    borderBottomWidth: 0.8,
    borderBottomColor: colors.grey,
  },
  agentNameText: {
    fontFamily: fonts.bold,
    fontSize: hp(1.8),
    color: colors.black,
  },
  agentDesgText: {
    fontFamily: fonts.regular,
    fontSize: hp(1.8),
    color: colors.grey,
  },
  seperator: {
    marginTop: hp(2),
    backgroundColor: colors.grey,
    height: 1,
    width: wp(90),
  },
  indicator: {
    width: wp(100),
    height: hp(90),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
