import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {verticalScale} from '../../Common/Functions/Responsive';
import AddressForm from './Form';
import {flexBoxStyle} from '../../Common/Styles';
import {BtmTabButton} from '../ProductDetails/ProductDetails';

const AddAddress = () => {
  return (
    <>
      <AddressForm />
      <View
        style={[flexBoxStyle.bottomTabContainer, {height: verticalScale(100)}]}>
        <BtmTabButton fill>Save address</BtmTabButton>
      </View>
    </>
  );
};

export default AddAddress;

const styles = StyleSheet.create({});
