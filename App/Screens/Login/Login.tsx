import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {dividerStyle, textStyles} from '../../Common/Styles';

import * as yup from 'yup';
import {emailValidation, passwordValidation} from '../../Common/Validation';
import {Formik, FormikValues} from 'formik';
import CustomTextField from '../../Components/TextInput/TextField';
import {OutlineButton, Button} from '../../Components/Button';
import {Image} from 'react-native';
import {KeyboardView} from '../../Components/KeyboardView';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

// images
const google_img = require('../../../assets/images/Google.png');
const facebook_img = require('../../../assets/images/Facebook.png');

const initValue = {email: '', password: ''};
const validation = yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});

export const LinkButton = (props: {label: string; onPress?: () => void}) => (
  <TouchableOpacity onPress={props.onPress} style={styles.linkBtn}>
    <Text style={[textStyles.link, {textAlign: 'center'}]}>{props.label}</Text>
  </TouchableOpacity>
);

type GoogleFacebookBtnProps = {
  onPress?: () => void;
  image: any;
  children: string;
};

export const GoogleFacebookBtn = (props: GoogleFacebookBtnProps) => (
  <TouchableOpacity style={styles.googleBtn} onPress={props.onPress}>
    <Image style={styles.img} source={props.image} />
    <Text style={textStyles.label}>{props.children}</Text>
  </TouchableOpacity>
);

const Login = (props: ScreenProps) => {
  const {navigation} = props;

  const handleNavigate = (screen: string) => () => navigation.navigate(screen);

  const handleSubmit = async (params: FormikValues) => {};

  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={textStyles.title}>Welcome Back!</Text>
        <Text style={textStyles.label}>HI! Welcome back</Text>
      </View>
      <View style={styles.form}>
        <Formik
          initialValues={initValue}
          onSubmit={handleSubmit}
          validationSchema={validation}>
          {() => (
            <>
              <CustomTextField
                type="email"
                label="Email *"
                placeholder="Enter E-mail Address"
                icon="email-outline"
              />
              <CustomTextField
                type="password"
                label="Password *"
                placeholder="Enter Password"
              />
              <View style={styles.row}>
                <LinkButton
                  onPress={handleNavigate(routes.ACCOUNT_VERIFICATION_SCREEN)}
                  label="Forget Password?"
                />
                <LinkButton
                  onPress={handleNavigate(routes.CHANGE_PASSWORD_SCREEN)}
                  label="Change Password?"
                />
              </View>

              <View style={styles.row}>
                <View style={dividerStyle.horizontal} />
                <Text style={[textStyles.label]}>or</Text>
                <View style={dividerStyle.horizontal} />
              </View>
              <OutlineButton>Continue as guest</OutlineButton>
              <View style={styles.googleBtnContainer}>
                <GoogleFacebookBtn image={google_img}>Google</GoogleFacebookBtn>
                <GoogleFacebookBtn image={facebook_img}>
                  Facebook
                </GoogleFacebookBtn>
              </View>
              <LinkButton
                onPress={handleNavigate(routes.SIGNUP_SCREEN)}
                label="Don’t have an account? Create new account"
              />
              <Button onPress={handleNavigate(routes.HOME_SCREEN)}>
                Log in
              </Button>
            </>
          )}
        </Formik>
      </View>
    </KeyboardView>
  );
};

export default Login;

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

  linkBtn: {
    paddingVertical: verticalScale(4),
    paddingHorizontal: horizontalScale(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(18),
  },
  img: {
    width: horizontalScale(30),
    height: verticalScale(30),
  },
  googleBtn: {
    alignItems: 'center',
    padding: moderateScale(6),
    gap: moderateScale(6),
  },
  googleBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: moderateScale(35),
    marginVertical: verticalScale(20),
  },
});
