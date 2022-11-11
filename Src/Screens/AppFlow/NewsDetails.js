import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icon} from '@rneui/themed';
import {colors} from '../../Constants/Colors';
import {hp, wp} from '../../Constants/Responsive';
import {fonts} from '../../Constants/Fonts';

export default function NewsDetails(props) {
  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={{flex: 1, alignItems: 'center'}}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={()=>props.navigation.goBack()}>
            <View style={styles.iconBackground}>
              <Icon
                type="material"
                name="arrow-back"
                size={20}
                color={colors.white}
              />
            </View>
          </TouchableOpacity>
          <Text style={styles.screenTitleStyle}>News Details</Text>
          <View></View>
        </View>
        <Image
          source={require('../../Assets/Images/news1.jpg')}
          style={{width: wp(90), height: hp(26), borderRadius: hp(2)}}
          resizeMode="cover"
        />
        <Text style={styles.newsTitleStyle}>Sumsung Housing Schem</Text>
        <View style={{marginHorizontal: wp(5), marginTop: hp(2)}}>
          <Text style={styles.newsHeadingStyle}>What is Lorem Ipsum?</Text>
          <Text style={styles.newsDetailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. F
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // alignItems: 'center',
    backgroundColor: colors.tertiary,
  },
  headerView: {
    width: wp(90),
    height: hp(15),
    flexDirection: 'row',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconBackground: {
    width: wp(10),
    height: hp(5),
    borderRadius: hp(3),
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  screenTitleStyle: {
    fontFamily: fonts.bold,
    fontSize: hp(2.4),
    color: colors.black,
  },
  newsTitleStyle: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2.5),
    color: colors.black,
    alignSelf: 'flex-start',
    marginLeft: wp(8),
    marginTop: hp(1),
  },
  newsHeadingStyle: {
    fontFamily: fonts.semiBold,
    fontSize: hp(2),
    color: colors.black,
  },
  newsDetailsText: {
    fontFamily: fonts.regular,
    fontSize: hp(1.8),
    color: colors.black,
  },
});
