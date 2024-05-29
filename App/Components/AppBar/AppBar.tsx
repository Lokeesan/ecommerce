import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {IconButton} from 'react-native-paper';
import {textStyles} from '../../Common/Styles';

import Icon from 'react-native-vector-icons/Ionicons';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs';
import routes, {routers} from '../../Navigation/Routes';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {ScreenProps} from '../../Screens/Type';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {DrawerHeaderProps} from '@react-navigation/drawer';

const logo = require('../../../assets/images/SivasLogo.png');

const AppBar = (props: DrawerHeaderProps) => {
  const {navigation} = props;

  const openDrawer = () => navigation.toggleDrawer();

  const navigateTo = (screen: string, router?: string) => () => {
    if (!router) navigation.navigate(screen);
    else navigation.navigate(router, {screen});
  };

  return (
    <View style={[styles.appBar, styles.spaceBetween]}>
      <TouchableOpacity onPress={navigateTo(routes.HOME_SCREEN)}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={navigateTo(routes.SEARCH_SCREEN)}>
        <Text style={textStyles.label}>Search</Text>
        <Icon name={'search-outline'} size={16} />
      </TouchableOpacity>
      <IconButton
        icon={'cart-outline'}
        onPress={navigateTo(routes.CART_SCREEN, routers.CART_ROUTER)}
        size={22}
      />
      <IconButton
        icon={'bell-outline'}
        onPress={navigateTo(routes.NOTIFICATIONS, routers.NOTIFICATION_ROUTER)}
        size={22}
      />
      <IconButton onPress={openDrawer} icon={'menu'} size={22} />
    </View>
  );
};

export default AppBar;

export const AppBarWithGoBack = (props: ScreenProps) => {
  const {params} = props?.route;
  return (
    <View style={styles.appBar}>
      <IconButton icon={'chevron-left'} onPress={props.navigation.goBack} />
      {params?.headerIcon && <IconButton icon={params?.headerIcon} />}
      <Text style={textStyles.text}>{params?.headerTitle ?? ''}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    height: verticalScale(35),
    backgroundColor: theme.background.default,
    borderRadius: moderateScale(6),
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: horizontalScale(12),
  },
  appBar: {
    backgroundColor: theme.divider,
    flexDirection: 'row',
    height: verticalScale(65),
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },
  logo: {
    width: horizontalScale(35),
    height: verticalScale(35),
    resizeMode: 'contain',
    marginRight: moderateScale(16),
  },
});
