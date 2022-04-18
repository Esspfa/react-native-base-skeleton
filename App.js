/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import tw from '~/lib/tailwind';
import {useDeviceContext} from 'twrnc';
import Routes from './routes';

const App = () => {
  useDeviceContext(tw);
  return (
    <>
      <Routes />
    </>
  );
};

export default App;
