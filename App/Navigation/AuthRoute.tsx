import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './Routes';

import {WelcomeScreen} from '../Screens/Welcome';
import {LoginScreen} from '../Screens/Login';
import {SignupScreen} from '../Screens/Signup';
import {VerifyOTPScreen} from '../Screens/VerifyOTP';
import {ChangePasswordScreen} from '../Screens/ChangePassword';
import {AccountRecoveryScreen} from '../Screens/AccountRecovery';

const Stack = createNativeStackNavigator();

export const AuthStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />
    <Stack.Screen name={routes.LOGIN_SCREEN} component={LoginScreen} />
    <Stack.Screen name={routes.SIGNUP_SCREEN} component={SignupScreen} />
    <Stack.Screen name={routes.OTP_SCREEN} component={VerifyOTPScreen} />
    <Stack.Screen
      name={routes.CHANGE_PASSWORD_SCREEN}
      component={ChangePasswordScreen}
    />
    <Stack.Screen
      name={routes.ACCOUNT_VERIFICATION_SCREEN}
      component={AccountRecoveryScreen}
    />
  </Stack.Navigator>
);
