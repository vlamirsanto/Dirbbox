import {StyleSheet} from 'react-native';
import {general, fonts, metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    ...general.alignCenter,
    flexDirection: 'row',
    flex: 1,
    height: 60,
    borderRadius: 10,
    marginHorizontal: metrics.baseMargin,
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
