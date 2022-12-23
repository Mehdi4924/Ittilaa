import * as React from 'react';
import {configureAxiosHeaders} from './Src/Api/ApiCalls';
import Routes from './Src/Navigation/Routes';

export default function App() {
  React.useEffect(async () => {
    configureAxiosHeaders();
  }, []);

  return <Routes />;
}
