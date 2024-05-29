import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentComponentProps,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../Common/Functions/Responsive';
import {IconButton} from 'react-native-paper';
import routes, {routers} from './Routes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TabNavigation from './TabNav';
import {AppBar} from '../Components/AppBar';
import {SearchScreen} from '../Screens/SearchScreen';
import {CartNavigator} from './CartRoutes';
import {ProductRoutes} from './ProductRoutes';
import {AuthStackNavigator} from './AuthRoute';
import {NotificationNavigator} from './NotificationRoutes';
import {AboutScreen} from '../Screens/About';
import {AppBarWithGoBack} from '../Components/AppBar/AppBar';
import {Terms} from '../Screens/Terms';
import {Contact} from '../Screens/Contact';
import {BranchesScreen} from '../Screens/Branches';

const menu = [
  {
    label: 'Track Order',
    icon: 'select-marker',
    route: routes.TRACK_ORDERS,
  },
  {
    label: 'Notifications',
    icon: 'bell-outline',
    route: routes.NOTIFICATIONS,
    router: routers.NOTIFICATION_ROUTER,
  },
  {
    label: 'Contact Us',
    icon: 'phone-outline',
    route: routes.CONTACT_US,
  },
  {
    label: 'About Us',
    icon: 'information-variant',
    route: routes.ABOUT_SCREEN,
  },
  {
    label: 'Branches',
    icon: 'source-branch',
    route: routes.BRANCHES,
  },
  {
    label: 'Terms of Use',
    icon: 'text-box-check',
    route: routes.T_C,
  },
];

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const drawerContent = ({navigation}: DrawerContentComponentProps) => {
    const handleCloseDrawer = () => navigation.closeDrawer();

    const renderMenu = menu.map((m, i) => (
      <TouchableOpacity
        onPress={() => {
          if (!m.router) navigation.navigate(m.route);
          else navigation.navigate(m.router, {screen: m.route});
        }}
        style={styles.menuItem}
        key={i}>
        <Icon size={18} name={m.icon} />
        <Text>{m.label}</Text>
      </TouchableOpacity>
    ));

    return (
      <View style={styles.container}>
        <IconButton
          onPress={handleCloseDrawer}
          style={{marginLeft: 'auto'}}
          icon={'close'}
        />
        <View style={{paddingVertical: 48}}>{renderMenu}</View>
      </View>
    );
  };

  const hideHeader = {headerShown: false};

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerType: 'front',
        drawerStyle: {
          width: horizontalScale(240),
        },
      }}
      drawerContent={drawerContent}>
      <Drawer.Screen
        options={{
          header: AppBar,
        }}
        name={routers.TAB_ROUTER}
        component={TabNavigation}
      />

      <Drawer.Screen
        options={hideHeader}
        name={routes.SEARCH_SCREEN}
        component={SearchScreen}
      />
      <Drawer.Screen
        options={hideHeader}
        name={routers.CART_ROUTER}
        component={CartNavigator}
      />
      <Drawer.Screen
        options={hideHeader}
        name={routers.PRODUCT_ROUTER}
        component={ProductRoutes}
      />
      <Drawer.Screen
        options={hideHeader}
        name={routers.AUTH_ROUTER}
        component={AuthStackNavigator}
      />
      <Drawer.Screen
        options={hideHeader}
        name={routers.NOTIFICATION_ROUTER}
        component={NotificationNavigator}
      />
      <Drawer.Screen
        options={{
          header: AppBarWithGoBack,
        }}
        initialParams={{
          headerTitle: 'About',
        }}
        name={routes.ABOUT_SCREEN}
        component={AboutScreen}
      />
      <Drawer.Screen
        options={{
          header: AppBarWithGoBack,
        }}
        initialParams={{
          headerTitle: 'Terms of Use',
        }}
        name={routes.T_C}
        component={Terms}
      />
      <Drawer.Screen
        options={{
          header: AppBarWithGoBack,
        }}
        initialParams={{
          headerTitle: 'Contact',
        }}
        name={routes.CONTACT_US}
        component={Contact}
      />
      <Drawer.Screen
        options={{
          header: AppBarWithGoBack,
        }}
        initialParams={{
          headerTitle: 'Branches',
        }}
        name={routes.BRANCHES}
        component={BranchesScreen}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    paddingLeft: horizontalScale(26),
    paddingRight: horizontalScale(12),
    paddingVertical: verticalScale(20),
  },
  menuItem: {
    flexDirection: 'row',
    gap: moderateScale(18),
    paddingVertical: verticalScale(20),
  },
});
