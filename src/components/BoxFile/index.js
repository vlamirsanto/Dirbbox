import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import {format} from 'date-fns';
import {ptBR} from 'date-fns/locale';

import styles from './styles';

const BoxFile = ({item}) => {
  const date = format(item.date, 'MMMM dd.y', {
    locale: ptBR,
  });

  return (
    <TouchableOpacity
      onPress={() => {}}
      activeOpacity={0.6}
      style={[item.containerColor, styles.container]}>
      <View style={styles.wrapper}>
        <Image style={styles.folderImage} source={item.icon} />
        <TouchableOpacity onPress={() => {}} activeOpacity={0.6}>
          <Icons style={[styles.icon, item.color]} name="more-vert" />
        </TouchableOpacity>
      </View>
      <Text numberOfLines={1} style={[item.color, styles.boxTitle]}>
        {item.title}
      </Text>
      <Text style={[item.color, styles.boxDate]}>{date}</Text>
    </TouchableOpacity>
  );
};

export default BoxFile;
