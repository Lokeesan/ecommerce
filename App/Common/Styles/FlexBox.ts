import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Functions/Responsive';
import {theme} from '../../Config/Theme';

export const flexBoxStyle = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },

  flex: {
    flex: 1,
  },
  bottomTabContainer: {
    width: '100%',
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    backgroundColor: theme.background.default,
    gap: moderateScale(20),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(27),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
});
