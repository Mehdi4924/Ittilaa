import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { hp, wp } from '../../Constants/Responsive'
import { colors } from '../../Constants/Colors'

export default function TopClassified(props) {
  return (
    <View style={styles.mainContainer}>
    <ScrollView>
      <CustomHeader
        headerStyle={styles.headerStyle}
        leftImage={allImages.logo2}
        leftImageStyle={{width: wp(50), height: hp(10)}}
        rightIconName="queue"
        rightIconType="material"
        rightIconColor={colors.white}
        rightIconSize={30}
        inputViewStyle={styles.inputViewStyle}
        textInputStyle={styles.textInputStyle}
        placeholder="Search"
        placeholderTextColor={colors.grey}
      />
      </ScrollView>
      </View>
  )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.tertiary,
      },
})