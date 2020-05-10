import React from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Button from '~/components/Button';

import {colors} from '~/styles';
import styles from './styles';

const background = require('~/assets/bg-login.png');

const Main = () => (
  <ImageBackground
    source={background}
    style={styles.container}
    imageStyle={styles.background}>
    <StatusBar barStyle="dark-content" />

    <View style={styles.content}>
      <Text style={styles.text}>Dirbbox</Text>

      <View style={styles.wrapper}>
        <Button
          icon="fingerprint"
          backgroundColor={colors.blueTransparent}
          color={colors.blue}
          title="Smart Id"
          onPress={() => {}}
        />
        <Button
          backgroundColor={colors.blue}
          color={colors.white}
          title="Login"
          onPress={() => {}}
        />
      </View>
    </View>
  </ImageBackground>
);

export default Main;
