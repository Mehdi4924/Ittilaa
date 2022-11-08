import * as React from 'react';
import {Alert, BackHandler, PermissionsAndroid, Text, View} from 'react-native';
import Routes from './Src/Navigation/Routes';
import HomeScreen from './Src/Screens/BottomTab/HomeScreen';
export default function App() {
  React.useEffect(() => {}, []);

  return <HomeScreen />;
}
