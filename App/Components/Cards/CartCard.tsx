import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {textStyles} from '../../Common/Styles';
import {Counter} from '../Counter';
import {IconButton} from 'react-native-paper';
import {theme} from '../../Config/Theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const img = require('../../../assets/images/products/1.png');

const CartCard = () => {
  return (
    <View style={styles.card}>
      <Image style={styles.img} source={img} />
      <View style={{gap: moderateScale(4)}}>
        <Text style={textStyles.text}>CartCard</Text>
        <View style={styles.row}>
          <Text style={textStyles.label}>Color: </Text>
          <View style={[styles.colorDot, {backgroundColor: 'red'}]} />
        </View>
        <Counter />
      </View>
      <View style={[{marginLeft: 'auto'}, styles.flexEnd]}>
        <IconButton
          size={moderateScale(16)}
          icon={'trash-can-outline'}
          iconColor="red"
        />
        <View style={styles.flexEnd}>
          <Text style={textStyles.subtitle}>100 QR</Text>
          <View style={styles.row}>
            <Text style={[textStyles.label, textStyles.delText]}> 150 QR </Text>
            <Text
              style={[
                textStyles.label,
                {color: theme.success, fontSize: moderateScale(12)},
              ]}>
              SAVE 75 QAR
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
  flexEnd: {alignItems: 'flex-end'},
  img: {
    width: horizontalScale(80),
    height: verticalScale(80),
    resizeMode: 'cover',
    borderRadius: moderateScale(10),
  },
  card: {flexDirection: 'row', gap: moderateScale(10)},
  row: {
    flexDirection: 'row',
    gap: moderateScale(8),
    alignItems: 'center',
  },
  colorDot: {
    width: horizontalScale(16),
    borderRadius: moderateScale(8),
    height: verticalScale(16),
  },
});
