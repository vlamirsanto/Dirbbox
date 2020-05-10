import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const Button = ({icon, backgroundColor, color, title, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.container, {backgroundColor}]}
    activeOpacity={0.6}>
    <Icons style={[styles.icon, {color}]} name={icon} />
    <Text style={[styles.button, {color}]}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
