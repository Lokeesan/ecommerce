import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardView} from '../../Components/KeyboardView';
import {textStyles} from '../../Common/Styles';
import CustomTextField from '../../Components/TextInput/TextField';
import {LinkButton} from '../Login/Login';
import {Button} from '../../Components/Button';
import {moderateScale} from '../../Common/Functions/Responsive';

const VerifyAccount = () => {
  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={textStyles.title}>Verify Your Account</Text>
      </View>
      <View style={styles.form}>
        <CustomTextField
          type="email"
          label="Email *"
          placeholder="Enter E-mail Address"
          icon="email-outline"
        />
        <CustomTextField
          type="number"
          label="OTP number *"
          placeholder="Enter OTP"
        />
        <LinkButton label="Resent OTP" />
        <Button>Verify</Button>
      </View>
    </KeyboardView>
  );
};

export default VerifyAccount;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    gap: moderateScale(4),
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 4,
    gap: moderateScale(14),
  },
});
