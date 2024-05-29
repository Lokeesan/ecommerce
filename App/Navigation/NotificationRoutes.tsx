import {createNativeStackNavigator} from '@react-navigation/native-stack';
import routes from './Routes';
import {AppBarWithGoBack} from '../Components/AppBar/AppBar';
import {NotificationsScreen} from '../Screens/Notifications';
import {Navigation} from '../Screens/[Navigation]';

const Stack = createNativeStackNavigator();

const initProps = {
  headerIcon: 'bell-badge-outline',
  headerTitle: 'Notification',
};

export const NotificationNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      header: AppBarWithGoBack,
    }}>
    <Stack.Screen
      name={routes.NOTIFICATIONS}
      initialParams={initProps}
      component={NotificationsScreen}
    />
    <Stack.Screen
      name={routes.NOTIFICATION}
      initialParams={initProps}
      component={Navigation}
    />
  </Stack.Navigator>
);
