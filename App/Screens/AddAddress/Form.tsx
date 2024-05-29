import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import CustomTextField from '../../Components/TextInput/TextField';
import {textStyles} from '../../Common/Styles';
import {
  horizontalScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import Map from './Map';

const initValues = {};

const AddressForm = () => {
  const handleSubmit = () => {};

  return (
    <ScrollView>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
        <View style={styles.form}>
          <CustomTextField label="Receivers Name" placeholder="User Name" />
          <CustomTextField label="Phone Number" placeholder="Phone Number" />
          <CustomTextField label="Street" placeholder="Street Name" />
          <CustomTextField label="City" placeholder="City Name" />
          <CustomTextField
            label="State/ province/ area"
            placeholder="State Name"
          />
          <CustomTextField label="Country" placeholder="Country Name" />

          <Text style={[textStyles.text, {marginTop: verticalScale(10)}]}>
            Use my current location{' '}
          </Text>
          <Map />
        </View>
      </Formik>
    </ScrollView>
  );
};

export default AddressForm;

const styles = StyleSheet.create({
  form: {
    gap: 14,
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(14),
  },
  container: {
    paddingHorizontal: horizontalScale(14),
  },
});
