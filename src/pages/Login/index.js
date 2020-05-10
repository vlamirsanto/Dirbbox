import React, {Component} from 'react';
import {View, Text, ImageBackground, StatusBar, AlertIOS} from 'react-native';
// import FingerprintScanner from 'react-native-fingerprint-scanner';
import PropTypes from 'prop-types';

import Button from '~/components/Button';

import {colors} from '~/styles';
import styles from './styles';

const background = require('~/assets/bg-login.png');

class Login extends Component {
  static propTypes = {
    handlePopupDismissed: PropTypes.func.isRequired,
  };

  // componentDidMount() {
  //   FingerprintScanner.authenticate({
  //     description: 'Scan your fingerprint on the device scanner to continue',
  //   })
  //     .then(() => {
  //       // this.props.handlePopupDismissed();
  //       AlertIOS.alert('Authenticated successfully');
  //     })
  //     .catch((error) => {
  //       this.props.handlePopupDismissed();
  //       AlertIOS.alert(error.message);
  //     });
  // }

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

          <View style={styles.wrapper}>
            <Button
              icon="fingerprint"
              backgroundColor={colors.blue}
              color={colors.white}
              title="Smart Id"
              onPress={() => this.props.navigation.navigate('Main')}
            />
            {/* <Button
              icon="arrow-forward"
              backgroundColor={colors.blue}
              color={colors.white}
              title="Login"
              onPress={() => {}}
            /> */}
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Login;
