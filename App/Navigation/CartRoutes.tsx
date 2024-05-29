import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './Routes';
import {AppBarWithGoBack} from '../Components/AppBar/AppBar';
import {CartScreen} from '../Screens/Cart';
import RequiredLogin from '../Screens/RequiredLogin/RequiredLogin';
import {UserAddressScreen} from '../Screens/Address';
import {AddAddressScreen} from '../Screens/AddAddress';
import {OrderSummaryScreen} from '../Screens/OrderSummary';
import {PaymentScreen} from '../Screens/Payment';
import {OrderSuccessScreen} from '../Screens/OrderSuccess';

const Stack = createNativeStackNavigator();

const initProps = {
  headerIcon: 'cart-outline',
  headerTitle: 'Cart',
};
const checkOutProps = {
  headerIcon: 'cart-outline',
  headerTitle: 'Checkout',
};
export const CartNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      header: AppBarWithGoBack,
    }}
    initialRouteName={routes.CART_SCREEN}>
    <Stack.Screen
      name={routes.CART_SCREEN}
      initialParams={initProps}
      component={CartScreen}
    />
    <Stack.Screen
      name={routes.REQ_LOGIN}
      initialParams={initProps}
      component={RequiredLogin}
    />
    <Stack.Screen
      name={routes.USERS_ADDRESS}
      initialParams={initProps}
      component={UserAddressScreen}
    />
    <Stack.Screen
      name={routes.ADD_ADDRESS}
      initialParams={{
        headerTitle: 'Address',
      }}
      component={AddAddressScreen}
    />
    <Stack.Screen
      name={routes.ORDER_SUMMARY}
      initialParams={checkOutProps}
      component={OrderSummaryScreen}
    />
    <Stack.Screen
      name={routes.PAYMENT_SCREEN}
      initialParams={checkOutProps}
      component={PaymentScreen}
    />
    <Stack.Screen
      name={routes.ORDER_SUCCESS}
      initialParams={checkOutProps}
      component={OrderSuccessScreen}
    />
  </Stack.Navigator>
);
