import {StyleSheet} from 'react-native';
import {general, fonts, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.alignCenter,
    flexDirection: 'row',
    width: '45%',
    height: 50,
    borderRadius: 10,
  },
  icon: {
    marginRight: metrics.baseMargin,
    fontSize: fonts.biggest,
  },
  button: {
    fontSize: fonts.big,
    // fontFamily: fonts.primary,
  },
});

export default styles;
