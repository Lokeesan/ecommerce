import {StyleSheet} from 'react-native';
import {theme} from '../../Config/Theme';
import {moderateScale} from '../Functions/Responsive';

export const textStyles = StyleSheet.create({
  title: {
    fontSize: moderateScale(28),
    fontWeight: '800',
    fontFamily: 'Lato Bold',
    color: theme.text.primary,
  },
  textCenter: {
    textAlign: 'center',
  },
  subtitle: {
    fontSize: moderateScale(18),
    fontFamily: 'Lato Bold',

    color: theme.text.primary,
    fontWeight: '600',
  },
  label: {
    fontSize: moderateScale(14),
    color: theme.text.secondary,
    fontFamily: 'Lato-Light',
    fontWeight: '400',
    lineHeight: 20,
  },
  link: {
    fontSize: moderateScale(13),
    color: theme.text.link,
    fontFamily: 'Lato-Light',
    fontWeight: '400',
  },
  text: {
    color: theme.text.secondary,
    fontFamily: 'Lato Regular',
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  caption: {
    color: theme.text.secondary,
    fontFamily: 'Lato Regular',
    fontSize: moderateScale(10),
    fontWeight: '400',
  },
  delText: {
    textDecorationLine: 'line-through',
  },
});
