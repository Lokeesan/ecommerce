import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {moderateScale, verticalScale} from '../../Common/Functions/Responsive';

const Summary = () => {
  return (
    <View style={styles.container}>
      <Text style={[textStyles.text, {marginBottom: verticalScale(10)}]}>
        Price Details
      </Text>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        <Text style={textStyles.label}>Price (1 item)</Text>
        <Text style={textStyles.label}>75.00 QAR</Text>
      </View>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        <Text style={textStyles.label}>Discount</Text>
        <Text style={textStyles.label}>-</Text>
      </View>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        <Text style={textStyles.label}>Coupon Discount</Text>
        <Text style={textStyles.label}>-</Text>
      </View>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        <Text style={textStyles.label}>Loyalty Point</Text>
        <Text style={textStyles.label}>-</Text>
      </View>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        <Text style={textStyles.label}>Total Amount</Text>
        <Text style={textStyles.label}>75.00 QAR</Text>
      </View>
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(10),
  },
});
