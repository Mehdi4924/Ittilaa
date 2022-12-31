import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import InventoryDetails from '../Screens/AppFlow/InventoryDetails';
import ClassifiedDetails from '../Screens/AppFlow/ClassifiedDetails';
import TopClassified from '../Screens/AppFlow/TopClassified';
import FeaturedProjects from '../Screens/AppFlow/FeaturedProjects';
import News from '../Screens/AppFlow/News';
import TopInventories from '../Screens/AppFlow/TopInventories';
import NewsDetails from '../Screens/AppFlow/NewsDetails';
import AgencyProfile from '../Screens/AppFlow/AgencyProfile';
import AllAgencies from '../Screens/AppFlow/AllAgencies';
import FeaturedDetails from '../Screens/AppFlow/FeaturedDetails';
import PackageDetails from '../Screens/AppFlow/PackageDetails';
import AgencyProperties from '../Screens/AppFlow/AgencyProperties';

export default function AppFlow() {
  const MainFlow = createNativeStackNavigator();
  return (
    <MainFlow.Navigator screenOptions={{headerShown: false}}>
      <MainFlow.Screen name="InventoryDetails" component={InventoryDetails} />
      <MainFlow.Screen name="ClassifiedDetails" component={ClassifiedDetails} />
      <MainFlow.Screen name="TopClassified" component={TopClassified} />
      <MainFlow.Screen name="FeaturedProjects" component={FeaturedProjects} />
      <MainFlow.Screen name="News" component={News} />
      <MainFlow.Screen name="TopInventories" component={TopInventories} />
      <MainFlow.Screen name="NewsDetails" component={NewsDetails} />
      <MainFlow.Screen name="AgencyProfile" component={AgencyProfile} />
      <MainFlow.Screen name="AllAgencies" component={AllAgencies} />
      <MainFlow.Screen name="FeaturedDetails" component={FeaturedDetails} />
      <MainFlow.Screen name="PackageDetails" component={PackageDetails} />      
      <MainFlow.Screen name="AgencyProperties" component={AgencyProperties} />      
    </MainFlow.Navigator>
  );
}
