import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar, Alert} from 'react-native';
import TouchID from 'react-native-touch-id';

import Button from '~/components/Button';
import config from '~/config/localAuthenticate';

import {colors} from '~/styles';
import styles from './styles';

const background = require('~/assets/bg-login.png');

class Login extends Component {
  _pressHandler = () => {
    TouchID.authenticate('Toque no sensor para se autenticar.', config)
      .then((success) => {
        this.props.navigation.navigate('Main');
      })
      .catch((error) => console.tron.log);
  };

  render() {
    return (
      <ImageBackground
        source={background}
        style={styles.container}
        imageStyle={styles.background}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.content}>
          <Text style={styles.text}>Bem vindo ao</Text>
          <Text style={styles.title}>Dirbbox</Text>
          <Text style={styles.textDefault}>
            Best cloud storage platform for all business and individuals to
            manage there data Join For Free.
          </Text>
        </View>

        <View style={styles.wrapper}>
          <Button
            icon="fingerprint"
            backgroundColor={colors.blueTransparent}
            color={colors.blue}
            title="Smart Id"
            onPress={this._pressHandler}
          />
          <Button
            icon="arrow-forward"
            backgroundColor={colors.blue}
            color={colors.white}
            title="Login"
            onPress={() => this.props.navigation.navigate('Main')}
          />
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
