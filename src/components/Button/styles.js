import {StyleSheet} from 'react-native';
import {general, fonts, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.alignCenter,
    flexDirection: 'row',
    width: '47%',
    height: 60,
    borderRadius: 10,
  },
  icon: {
    marginRight: metrics.baseMargin,
    fontSize: fonts.big,
  },
  button: {
    fontSize: fonts.regular,
  },
});

export default styles;
