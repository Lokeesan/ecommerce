import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../Config/Theme';
import {Image} from 'react-native';
import {textStyles} from '../../../Common/Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../Common/Functions/Responsive';

const slider1 = require('../../../../assets/images/Slider/1.png');

const images = [slider1, slider1, slider1];

const Slider = () => {
  const [active, setActive] = useState(0);

  const renderDots = images.map((_, i) => (
    <View key={i} style={[styles.dots, i === active && styles.active]} />
  ));

  return (
    <View style={styles.box}>
      <Image source={images[active]} style={styles.img} />
      <View style={styles.leftContainer}>
        <View style={styles.dotContainer}>{renderDots}</View>
        <TouchableOpacity style={styles.btn}>
          <Text style={[textStyles.text, {color: theme.background.default}]}>
            Explore
          </Text>
          <View style={styles.iconBtn}>
            <Icon name="arrow-right-thin" size={moderateScale(20)} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  box: {
    backgroundColor: theme.background.level1,
    height: verticalScale(200),
    borderRadius: moderateScale(8),
    overflow: 'hidden',
    alignItems: 'flex-end',
  },
  leftContainer: {
    marginHorizontal: horizontalScale(18),
    marginVertical: verticalScale(22),
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flex: 1,
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  dotContainer: {
    gap: moderateScale(10),
  },
  iconBtn: {
    width: horizontalScale(25),
    height: verticalScale(25),
    borderRadius: moderateScale(13),
    backgroundColor: theme.background.default,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    gap: 6,
    backgroundColor: '#0002',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: verticalScale(8),
    borderRadius: moderateScale(20),
    paddingHorizontal: horizontalScale(8),
  },
  dots: {
    width: horizontalScale(12),
    height: verticalScale(12),
    borderRadius: moderateScale(6),
    borderWidth: 2,
    borderColor: theme.background.default,
  },
  active: {
    backgroundColor: theme.background.default,
  },
});
