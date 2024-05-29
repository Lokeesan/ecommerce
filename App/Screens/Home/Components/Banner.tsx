import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {theme} from '../../../Config/Theme';
import {textStyles} from '../../../Common/Styles';
import {
  moderateScale,
  verticalScale,
} from '../../../Common/Functions/Responsive';

const img1 = require('../../../../assets/images/Banner/1.png');
const img2 = require('../../../../assets/images/Banner/2.png');

const images = [
  {img: img1, label: 'OFFERS'},
  {img: img2, label: 'SPECIAL COLLECTIONS'},
];

const Banner = () => {
  const renderImg = images.map((_, i) => (
    <TouchableOpacity key={i} style={styles.item}>
      <Image style={styles.img} source={_.img} />
      <Text style={textStyles.label}>{_.label}</Text>
    </TouchableOpacity>
  ));
  return <View style={styles.row}>{renderImg}</View>;
};

export default Banner;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: moderateScale(22),
  },
  item: {
    flex: 1,
    alignItems: 'center',
    gap: moderateScale(8),
  },
  img: {
    borderRadius: moderateScale(5),
    backgroundColor: theme.divider,
    width: '100%',
    height: verticalScale(98),
    resizeMode: 'cover',
  },
});
