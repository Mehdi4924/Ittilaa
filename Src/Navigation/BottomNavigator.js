import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
import {allImages} from '../Constants/Images';
import {hp} from '../Constants/Responsive';
import AddInventoriesClassified from '../Screens/BottomTab/AddInventoriesClassified';
import Classified from '../Screens/BottomTab/Classified';
import HomeScreen from '../Screens/BottomTab/HomeScreen';
import Inventories from '../Screens/BottomTab/Inventories';
import {colors} from '../Constants/Colors';
import Maps from '../Screens/BottomTab/Maps';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.primary},
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarLabelStyle: {color: colors.white},
          tabBarIcon: () => (
            <Icon
              name={'home'}
              type={'font-awesome'}
              color={colors.white}
              size={hp(3)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Inventories"
        component={Inventories}
        options={{
          tabBarLabelStyle: {color: colors.white},
          tabBarIcon: () => (
            <Icon
              name={'package'}
              type={'octicon'}
              color={colors.white}
              size={hp(3)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="AddInventoriesClassified"
        component={AddInventoriesClassified}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {color: colors.white},
          tabBarIcon: p => (
            <View style={styles.bottomButton}>
              <Icon
                name={'plus'}
                type={'font-awesome'}
                color={colors.primary}
                size={hp(4)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Classified"
        component={Classified}
        options={{
          tabBarLabelStyle: {color: colors.white},
          tabBarIcon: () => (
            <Icon
              name={'form-select'}
              type={'material-community'}
              color={colors.white}
              size={hp(3)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarLabelStyle: {color: colors.white},
          tabBarIcon: () => (
            <Icon
              name={'globe'}
              type={'entypo'}
              color={colors.white}
              size={hp(3)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  bottomButton: {
    marginBottom: hp(4),
    backgroundColor: colors.white,
    padding: 5,
    width: hp(9),
    height: hp(9),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    borderWidth: 6,
    borderColor: colors.primary,
  },
});
