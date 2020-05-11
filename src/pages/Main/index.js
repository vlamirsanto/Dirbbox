import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';

import BoxFile from '~/components/BoxFile';

import {colors} from '~/styles';
import styles from './styles';

class Main extends Component {
  state = {
    data: [
      {
        id: Math.random(),
        icon: require('~/assets/folder-blue.png'),
        title: 'Mobile Apps',
        date: new Date(),
        containerColor: styles.containerBlue,
        color: styles.textBoxBlue,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-yellow.png'),
        title: 'SVG Icons',
        date: new Date(),
        containerColor: styles.containerYellow,
        color: styles.textBoxYellow,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-red.png'),
        title: 'Proptypes',
        date: new Date(),
        containerColor: styles.containerRed,
        color: styles.textBoxRed,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-green.png'),
        title: 'Avatars',
        date: new Date(),
        containerColor: styles.containerGreen,
        color: styles.textBoxGreen,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-blue.png'),
        title: 'Mobile Apps',
        date: new Date(),
        containerColor: styles.containerBlue,
        color: styles.textBoxBlue,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-yellow.png'),
        title: 'SVG Icons',
        date: new Date(),
        containerColor: styles.containerYellow,
        color: styles.textBoxYellow,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-red.png'),
        title: 'Proptypes',
        date: new Date(),
        containerColor: styles.containerRed,
        color: styles.textBoxRed,
      },
      {
        id: Math.random(),
        icon: require('~/assets/folder-green.png'),
        title: 'Avatars',
        date: new Date(),
        containerColor: styles.containerGreen,
        color: styles.textBoxGreen,
      },
    ],
  };

  logout = () => {
    const {navigation} = this.props;

    Alert.alert(
      'Já indo embora?',
      'Você deseja deslogar-se do Dirrbox?',
      [
        {
          text: 'Cancel',
          onPress: () => console.tron.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => navigation.navigate('Login'),
        },
      ],
      {cancelable: false},
    );
  };

  render() {
    const {data} = this.state;

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />

        <View style={styles.content}>
          <View style={styles.wrapper}>
            <Text style={styles.title}>Meu Dirbbox</Text>
            <TouchableOpacity onPress={this.logout} activeOpacity={0.6}>
              <Icons name="power-settings-new" style={styles.icon} />
            </TouchableOpacity>
          </View>

          <View style={styles.search}>
            <Icons name="search" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Busca"
              placeholderTextColor={colors.primary}
              onChange={(e) => console.log}
            />
          </View>
        </View>

        <FlatList
          contentContainerStyle={styles.listItems}
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({item}) => <BoxFile item={item} />}
        />
      </SafeAreaView>
    );
  }
}

export default Main;
