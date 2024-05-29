import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardView} from '../../Components/KeyboardView';
import {dividerStyle, textStyles} from '../../Common/Styles';
import {Formik, FormikValues} from 'formik';
import * as yup from 'yup';
import {emailValidation, passwordValidation} from '../../Common/Validation';
import CustomTextField from '../../Components/TextInput/TextField';
import {GoogleFacebookBtn, LinkButton} from '../Login/Login';
import {Button} from '../../Components/Button';
import {DatePicker} from '../../Components/DatePicker';
import {DropDown} from '../../Components/DropDown';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';
import {
  horizontalScale,
  moderateScale,
} from '../../Common/Functions/Responsive';

const user_img = require('../../../assets/images/User.png');

const initValue = {email: '', password: ''};
const validation = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

const Signup = (props: ScreenProps) => {
  const {navigation} = props;

  const handleNavigate = (screen: string) => () => navigation.navigate(screen);
  const handleSubmit = async (params: FormikValues) => {};

  const genderOption = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'},
  ];

  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={textStyles.title}>Create Account</Text>
        <Text style={(textStyles.label, styles.subtitle)}>
          Fill your information below or register with your social account
        </Text>
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={initValue}
          onSubmit={handleSubmit}
          validationSchema={validation}>
          {() => (
            <>
              <CustomTextField
                label="Username *"
                placeholder="Enter name"
                icon="account-circle-outline"
              />
              <CustomTextField
                type="email"
                label="Email *"
                placeholder="Enter E-mail Address"
                icon="email-outline"
              />
              <View style={styles.row}>
                <DatePicker label="Date of Birth" />
                <DropDown
                  options={genderOption}
                  label="Gender"
                  placeholder="Select Gender"
                />
              </View>
              <CustomTextField
                type="password"
                label="Password *"
                placeholder="Enter Password"
              />
              <CustomTextField
                type="password"
                label="Re enter password *"
                placeholder="Enter Password"
              />
              <View style={styles.row}>
                <View style={dividerStyle.horizontal} />
                <Text style={[textStyles.label]}>or</Text>
                <View style={dividerStyle.horizontal} />
              </View>
              {/* <GoogleFacebookBtn image={user_img}>Guest User</GoogleFacebookBtn> */}
              <LinkButton
                onPress={handleNavigate(routes.LOGIN_SCREEN)}
                label="Already have an account? Log In"
              />
              <Button onPress={handleNavigate(routes.HOME_SCREEN)}>
                Sign Up
              </Button>
            </>
          )}
        </Formik>
      </View>
    </KeyboardView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    gap: moderateScale(4),
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 5,
    gap: moderateScale(14),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(18),
  },
  subtitle: {textAlign: 'center', maxWidth: horizontalScale(280)},
});
