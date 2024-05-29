import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {Image} from 'react-native';
import {textStyles} from '../../Common/Styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const img = require('../../../assets/images/products/1.png');

const RedeemCard = () => {
  return (
    <View style={[styles.row, styles.spaceBetween]}>
      <View style={styles.row}>
        <Image source={img} style={styles.img} />
        <View style={{gap: moderateScale(4)}}>
          <Text style={textStyles.text}>RedeemCard</Text>
          <Text style={textStyles.caption}>{new Date().toDateString()}</Text>
        </View>
      </View>
      <Text style={textStyles.subtitle}>
        100
        <Text style={textStyles.label}> Points</Text>
      </Text>
    </View>
  );
};

export default RedeemCard;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8),
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  img: {
    width: horizontalScale(50),
    height: verticalScale(50),
    borderRadius: moderateScale(10),
    backgroundColor: theme.divider,
    resizeMode: 'cover',
  },
});
