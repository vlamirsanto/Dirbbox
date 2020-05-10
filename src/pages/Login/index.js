import React from 'react';
import {View, Text, ImageBackground, StatusBar} from 'react-native';

import Button from '~/components/Button';

import {colors} from '~/styles';
import styles from './styles';

const background = require('~/assets/bg-login.png');

const Login = (props) => (
  <ImageBackground
    source={background}
    style={styles.container}
    imageStyle={styles.background}>
    <StatusBar barStyle="dark-content" />

    <View style={styles.content}>
      <Text style={styles.text}>Bem vindo ao</Text>
      <Text style={styles.title}>Dirbbox</Text>
      <Text style={styles.textDefault}>
        Best cloud storage platform for all business and individuals to manage
        there data Join For Free.
      </Text>
    </View>

    <View style={styles.wrapper}>
      <Button
        icon="fingerprint"
        backgroundColor={colors.blueTransparent}
        color={colors.blue}
        title="Smart Id"
        onPress={() => props.navigation.navigate('Main')}
      />
      <Button
        icon="arrow-forward"
        backgroundColor={colors.blue}
        color={colors.white}
        title="Login"
        onPress={() => props.navigation.navigate('Main')}
      />
    </View>
  </ImageBackground>
);

export default Login;
