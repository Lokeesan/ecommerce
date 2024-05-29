import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductDetails} from '../Screens/ProductDetails';
import {AppBarWithGoBack} from '../Components/AppBar/AppBar';
import routes from './Routes';

const Stack = createNativeStackNavigator();

export const ProductRoutes = () => (
  <Stack.Navigator
    screenOptions={{
      header: AppBarWithGoBack,
    }}>
    <Stack.Screen
      initialParams={{headerTitle: 'lorem ipsum'}}
      name={routes.PRODUCT_DETAILS}
      component={ProductDetails}
    />
  </Stack.Navigator>
);
