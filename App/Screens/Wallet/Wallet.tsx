import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
import {textStyles} from '../../Common/Styles';
import {theme} from '../../Config/Theme';
import RedeemHistory from './RedeemHistory';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const img = require('../../../assets/images/wallet.png');
const user_img = require('../../../assets/images/User.png');

const Wallet = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 1, y: 0}}
        colors={['#8364FF', '#7E00CC']}
        style={styles.wallet}>
        <Image source={img} style={styles.img} />
        <View style={styles.walletContainer}>
          <View style={styles.rows}>
            <View style={styles.stack}>
              <Image source={user_img} style={styles.logo} />
              <Text style={[textStyles.label, styles.white]}>Username</Text>
            </View>
          </View>
          <View style={styles.stack}>
            <Text style={[styles.title, styles.white]}>100</Text>
            <Text
              style={[
                textStyles.subtitle,
                styles.white,
                {textAlign: 'center'},
              ]}>
              POINT
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text style={[textStyles.label, styles.white]}>Redeem now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <Text style={[textStyles.label, {textAlign: 'right'}]}>
        100 points = 10 QR
      </Text>
      <RedeemHistory />
    </View>
  );
};

export default Wallet;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: theme.primary.main,
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(5),
    alignItems: 'center',
    justifyContent: 'center',
    width: '40%',
  },
  logo: {
    width: horizontalScale(34),
    height: verticalScale(34),
    borderRadius: moderateScale(15),
  },
  title: {
    fontSize: moderateScale(42),
    textAlign: 'center',
    fontWeight: '800',
  },
  white: {
    color: '#fff',
  },
  container: {
    paddingVertical: verticalScale(22),
    paddingHorizontal: horizontalScale(22),
    gap: moderateScale(10),
  },
  wallet: {
    height: verticalScale(220),
    width: '100%',
    borderRadius: moderateScale(26),
  },
  walletContainer: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(16),
    gap: moderateScale(14),
    alignItems: 'center',
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  img: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  stack: {
    alignItems: 'center',
  },
});
