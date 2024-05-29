import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {textStyles} from '../../Common/Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const user_img = require('../../../assets/images/2x_user.png');

const menu_list = [
  {
    label: 'My Information',
    icon: 'account-circle-outline',
  },
  {
    label: 'My Offers',
    icon: 'sale',
  },
  {
    label: 'Order History',
    icon: 'history',
  },
  {
    label: 'Settings',
    icon: 'cog-outline',
  },
  {
    label: 'Language',
    icon: 'google-translate',
  },
  {
    label: 'Country',
    icon: 'web',
  },
];

const Settings = () => {
  const renderList = menu_list.map((m, i) => (
    <TouchableOpacity style={styles.row} key={i}>
      <Icon name={m.icon} color={theme.text.secondary} size={26} />
      <Text style={textStyles.label}>{m.label}</Text>
      <Icon
        style={styles.back}
        size={moderateScale(24)}
        name={'chevron-right'}
      />
    </TouchableOpacity>
  ));

  return (
    <View style={styles.main}>
      <View style={styles.profile}>
        <Image source={user_img} style={styles.img} />
        <Text style={[textStyles.title, {fontWeight: '500'}]}>Username</Text>
      </View>
      <View style={styles.settings}>
        <Text style={textStyles.subtitle}>Account</Text>
        <View>{renderList}</View>
        <TouchableOpacity style={[styles.row, {justifyContent: 'center'}]}>
          <Icon size={moderateScale(22)} name="logout" />
          <Text style={textStyles.label}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: moderateScale(6),
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    marginVertical: verticalScale(2),
  },
  img: {
    width: horizontalScale(85),
    height: verticalScale(85),
  },
  main: {
    flex: 1,
    backgroundColor: '#eee',
  },
  profile: {
    flex: 1,
    justifyContent: 'center',
    gap: moderateScale(12),
    alignItems: 'center',
  },
  settings: {
    flex: 2,
    borderTopRightRadius: moderateScale(24),
    borderTopLeftRadius: moderateScale(24),
    backgroundColor: theme.background.default,
    paddingHorizontal: horizontalScale(16),
    paddingVertical: verticalScale(24),
    gap: moderateScale(18),
  },
  back: {marginLeft: 'auto', color: theme.text.secondary},
});
