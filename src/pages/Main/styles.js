import {StyleSheet} from 'react-native';
import {fonts, metrics, colors} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingTop: metrics.basePadding,
    paddingHorizontal: metrics.basePadding,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: fonts.big,
    color: colors.primary,
    fontWeight: '600',
  },
  search: {
    flexDirection: 'row',
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.light,
    height: 55,
    paddingHorizontal: metrics.basePadding,
    alignItems: 'center',
    marginTop: metrics.baseMargin * 3,
    marginBottom: metrics.baseMargin * 2,
  },
  icon: {
    fontSize: fonts.big,
    color: colors.primary,
  },
  input: {
    flex: 1,
    fontSize: fonts.medium,
    color: colors.primary,
  },
  listItems: {
    paddingTop: metrics.basePadding / 2,
    paddingHorizontal: metrics.basePadding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  containerBlue: {
    backgroundColor: colors.blueTransparent,
  },
  textBoxBlue: {
    color: colors.primary,
  },
  containerYellow: {
    backgroundColor: colors.yellowTransparent,
  },
  textBoxYellow: {
    color: colors.yellow,
  },
  containerRed: {
    backgroundColor: colors.redTransparent,
  },
  textBoxRed: {
    color: colors.red,
  },
  containerGreen: {
    backgroundColor: colors.greenTransparent,
  },
  textBoxGreen: {
    color: colors.green,
  },
});

export default styles;
