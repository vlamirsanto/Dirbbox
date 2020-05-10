import {StyleSheet} from 'react-native';
import {metrics} from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    resizeMode: 'contain',
    width: '100%',
    height: 550,
    top: 0,
    position: 'absolute',
  },
  content: {
    flex: 1,
    paddingHorizontal: metrics.basePadding,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default styles;
