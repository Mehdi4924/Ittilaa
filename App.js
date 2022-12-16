import * as React from 'react';
import {Alert, BackHandler, PermissionsAndroid, Text, View} from 'react-native';
import { configureAxiosHeaders } from './Src/Api/ApiCalls';
import Routes from './Src/Navigation/Routes';
export default function App() {
  React.useEffect(() => {
    configureAxiosHeaders()
  }, []);

  return <Routes />;
}
