import * as React from 'react';
import {configureAxiosHeaders} from './Src/Api/ApiCalls';
import Routes from './Src/Navigation/Routes';
import {LogBox} from 'react-native';
console.log('thisssss');
export default function App() {
  React.useEffect(() => {
    LogBox.ignoreAllLogs();
    configureAxiosHeaders();
  }, []);

  return <Routes />;
}
