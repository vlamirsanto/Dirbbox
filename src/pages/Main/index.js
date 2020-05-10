import React, {Component} from 'react';
import {View, Text, TextInput, StatusBar} from 'react-native';

import styles from './styles';

class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <Text style={styles.title}>Meu Dirbbox</Text>
        <View style={styles.search}>
          <TextInput onChange={(e) => console.log} />
        </View>
      </View>
    );
  }
}

export default Main;
