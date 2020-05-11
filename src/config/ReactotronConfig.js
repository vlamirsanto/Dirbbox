import {Platform} from 'react-native';
import Reactotron from 'reactotron-react-native';

console.tron = console;

if (__DEV__) {
  const config = Platform.select({
    android: {host: 'localhost'},
    ios: null,
  });

  const tron = Reactotron.configure(config).useReactNative().connect();

  tron.clear();

  console.tron = tron;

  // Gambit - desabilitando yellow box
  console.disableYellowBox = true;
}
