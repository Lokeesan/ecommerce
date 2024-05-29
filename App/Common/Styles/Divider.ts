import {StyleSheet} from 'react-native';
import {theme} from '../../Config/Theme';

export const dividerStyle = StyleSheet.create({
  vertical: {
    borderRightColor: theme.background.level2,
    borderRightWidth: 1,
    flex: 1,
    height: '60%',
    alignSelf: 'center',
  },
  horizontal: {
    flex: 1,
    borderBottomColor: theme.divider,
    borderBottomWidth: 1,
    borderStyle: 'solid',
  },
});
