import {StyleSheet} from 'react-native';
import {metrics, fonts} from '~/styles';

const styles = StyleSheet.create({
  container: {
    padding: metrics.basePadding,
    width: metrics.screenWidth / 2.2 - metrics.baseMargin,
    borderRadius: metrics.baseRadius * 2,
    marginBottom: metrics.baseMargin * 2,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  folderImage: {
    width: 35,
    height: 28,
    marginBottom: metrics.baseMargin,
  },
  icon: {
    fontSize: fonts.regular,
  },
  boxTitle: {
    fontSize: fonts.small,
    fontWeight: '500',
    lineHeight: fonts.regular,
  },
  boxDate: {
    fontSize: fonts.tiny,
    lineHeight: fonts.tiny + 5,
    textTransform: 'capitalize',
  },
});

export default styles;
