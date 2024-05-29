import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardView} from '../../Components/KeyboardView';
import {textStyles} from '../../Common/Styles';
import CustomTextField from '../../Components/TextInput/TextField';
import {LinkButton} from '../Login/Login';
import {Button} from '../../Components/Button';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';
import {moderateScale} from '../../Common/Functions/Responsive';

const AccountRecovery = (props: ScreenProps) => {
  const {navigation} = props;
  const handleNavigate = (screen: string) => () => navigation.navigate(screen);

  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={textStyles.title}>Recover Your Account</Text>
      </View>
      <View style={styles.form}>
        <CustomTextField
          type="email"
          label="Email *"
          placeholder="Enter E-mail Address"
          icon="email-outline"
        />
        <LinkButton
          onPress={handleNavigate(routes.SIGNUP_SCREEN)}
          label="Don’t have an account? Create new account"
        />
        <Button onPress={handleNavigate(routes.OTP_SCREEN)}>Send OTP</Button>
      </View>
    </KeyboardView>
  );
};

export default AccountRecovery;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    gap: moderateScale(4),
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 3,
    gap: moderateScale(14),
  },
});
