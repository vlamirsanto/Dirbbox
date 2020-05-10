import {StyleSheet} from 'react-native';
import {general, metrics, colors, fonts} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: 550,
    top: -20,
    position: 'absolute',
  },
  content: {
    flex: 1,
    paddingTop: metrics.basePadding * 3,
    justifyContent: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.biggest,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin,
    marginBottom: metrics.baseMargin * 2,
  },
  text: {
    color: colors.secundary,
    fontSize: fonts.regular,
  },
  textDefault: {
    width: '70%',
    color: colors.secundary,
    fontSize: fonts.small,
    lineHeight: fonts.small + 10,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: metrics.baseMargin * 4,
  },
});

export default styles;
