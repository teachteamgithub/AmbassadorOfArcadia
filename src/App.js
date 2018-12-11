import React from 'react';
import { Text, View } from 'react-native';
import Reactotron, { overlay } from 'reactotron-react-native';

console.tron = Reactotron.configure()
  .configure()
  .useReactNative()
  .use(overlay())
  .connect();

const App = () => (
  <View>
    <Text>Hello World!</Text>
  </View>
);

const OverlayApp = console.tron.overlay(App);

export default OverlayApp;
