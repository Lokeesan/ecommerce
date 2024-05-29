import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import LoginSvgComponent from '../../../assets/images/SVG/login';
import {BtmTabButton} from '../ProductDetails/ProductDetails';
import {theme} from '../../Config/Theme';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';

const RequiredLogin = (props: ScreenProps) => {
  const handleNavigate = (screen: string, router?: string) => () => {
    if (!router) props.navigation.navigate(screen);
    else props.navigation.navigate(router, {screen});
  };

  return (
    <View style={styles.main}>
      <View
        style={[
          flexBoxStyle.flex,
          {
            gap: moderateScale(5),
          },
        ]}>
        <Text style={[textStyles.title, styles.title]}>
          {`Login and get \n more exiting offers`}
        </Text>
        <Text style={textStyles.caption}>
          login to complete your order or you can continue as guest user
        </Text>
      </View>
      <View style={{flex: 2}}>
        <LoginSvgComponent />
      </View>
      <View
        style={[flexBoxStyle.bottomTabContainer, {height: verticalScale(180)}]}>
        <BtmTabButton
          onPress={handleNavigate(routes.LOGIN_SCREEN, routes.AUTH_ROUTER)}
          fill>
          Login
        </BtmTabButton>
        <BtmTabButton
          onPress={handleNavigate(routes.USERS_ADDRESS, routes.CART_ROUTER)}>
          Continue as guest
        </BtmTabButton>
      </View>
    </View>
  );
};

export default RequiredLogin;

const styles = StyleSheet.create({
  main: {
    paddingTop: verticalScale(24),
    alignItems: 'center',
    flex: 1,
  },
  // btnContainer: {
  //   height: verticalScale(150),
  //   width: '100%',
  //   borderTopRightRadius: moderateScale(20),
  //   borderTopLeftRadius: moderateScale(20),
  //   backgroundColor: theme.background.default,
  //   gap: moderateScale(20),
  //   paddingHorizontal: horizontalScale(20),
  //   paddingVertical: verticalScale(16),

  //   shadowColor: '#000',
  //   shadowOffset: {
  //     width: 0,
  //     height: 6,
  //   },
  //   shadowOpacity: 0.37,
  //   shadowRadius: 7.49,

  //   elevation: 12,
  // },
  title: {
    fontWeight: '400',
    textAlign: 'center',
  },
});
