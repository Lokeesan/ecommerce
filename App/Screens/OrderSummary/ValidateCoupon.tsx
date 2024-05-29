import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {moderateScale} from '../../Common/Functions/Responsive';
import {textStyles} from '../../Common/Styles';
import {Formik} from 'formik';
import CustomTextField from '../../Components/TextInput/TextField';

const initValue = {
  coupon: '',
};

const ValidateCoupon = () => {
  const handleSubmit = () => {};

  return (
    <Formik initialValues={initValue} onSubmit={handleSubmit}>
      <View style={styles.container}>
        <Text style={textStyles.text}>Do you have a Coupon?</Text>
        <CustomTextField
          style={{backgroundColor: theme.background.default}}
          label="Enter Coupon"
          placeholder="Coupon number"
        />
        <TouchableOpacity style={styles.btn}>
          <Text style={[textStyles.text, {color: '#fff'}]}>Apply</Text>
        </TouchableOpacity>
      </View>
    </Formik>
  );
};

export default ValidateCoupon;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.level1,
    borderRadius: 12,
    padding: moderateScale(18),
    gap: moderateScale(12),
  },
  btn: {
    marginHorizontal: 'auto',
    backgroundColor: theme.primary.main,
    paddingVertical: moderateScale(6),
    paddingHorizontal: moderateScale(24),
    borderRadius: moderateScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
