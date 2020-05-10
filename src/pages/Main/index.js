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
      <Text style={styles.title}>Dirbbox</Text>
      <Text style={styles.text}>
        Best cloud storage platform for all business and individuals to manage
        there data Join For Free.
      </Text>

      <View style={styles.wrapper}>
        <Button
          icon="fingerprint"
          backgroundColor={colors.blueTransparent}
          color={colors.blue}
          title="Smart Id"
          onPress={() => {}}
        />
        <Button
          icon="arrow-forward"
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
