import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../../Common/Functions/Responsive';
import {textStyles} from '../../Common/Styles';

const Navigation = () => {
  return (
    <View style={styles.container}>
      <Text style={textStyles.subtitle}>Dear Customer,</Text>
      <Text style={textStyles.label}>
        hank you for shopping. Your order has been successfully processed, and
        we are excited to confirm your purchase details. Order Date: January 01,
        2024, 10:00 AM Delivery Address: 123 Main Street Cityville, State 56789
        Qatar Transaction Total: 75.00 QR Payment Method: Visa ending in 1234
        Product Details: Product Name: Premium Vintage Tea Cup Quantity: 1
        Price: $79.99 USD Subtotal: $119.99 USD Total: $124.99 USD Promotions:
        Discount Code: NEWCUSTOMER10 (applied) Loyalty Points Earned: 50 points
        Delivery Information: Estimated Delivery Date: January 02, 2024
      </Text>
    </View>
  );
};

export default Navigation;

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(24),
    gap: moderateScale(8),
  },
});
