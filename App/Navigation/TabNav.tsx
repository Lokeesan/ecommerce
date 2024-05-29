import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import routes from './Routes';
import {HomeScreen} from '../Screens/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {StyleSheet, View} from 'react-native';
import {theme} from '../Config/Theme';
import CategoriesScreen from '../Screens/Categories/CategoriesScreen';
import {WalletScreen} from '../Screens/Wallet';
import {SettingScreen} from '../Screens/Settings';
import {OfferScreen} from '../Screens/Offers';

const Tab = createBottomTabNavigator();

const tabList = [
  {
    name: routes.HOME_SCREEN,
    component: HomeScreen,
    icon: 'home-variant-outline',
  },
  {
    name: routes.CATEGORIES_SCREEN,
    component: CategoriesScreen,
    icon: 'format-list-text',
  },
  {
    name: routes.WALLET_SCREEN,
    component: WalletScreen,
    icon: 'wallet-outline',
  },
  {
    name: routes.OFFERS_SCREEN,
    component: OfferScreen,
    icon: 'tag-outline',
  },
  {
    name: routes.PROFILE_SCREEN,
    component: SettingScreen,
    icon: 'account-outline',
  },
];

type IconProps = {
  focused: boolean;
  size: number;
  name: string;
};

const renderTabIcon = ({focused, name, size}: IconProps) => (
  <View style={styles.iconBox}>
    <Icon
      name={name}
      size={size}
      color={theme.text[focused ? 'primary' : 'secondary']}
    />
    <View style={[styles.iconDivider, {opacity: focused ? 1 : 0}]} />
  </View>
);

export default function TabNavigation() {
  const screenProps: BottomTabNavigationOptions = {
    tabBarShowLabel: false,
    tabBarStyle: {
      height: 65,
      borderTopLeftRadius: 24,
      borderTopRightRadius: 24,
    },
    headerShown: false,
  };
  return (
    <Tab.Navigator screenOptions={screenProps}>
      {tabList.map(t => (
        <Tab.Screen
          key={t.name}
          name={t.name}
          options={{
            tabBarIcon: props => renderTabIcon({...props, name: t.icon}),
          }}
          component={t.component}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconDivider: {
    width: 16,
    height: 3,
    borderRadius: 1,
    backgroundColor: theme.text.primary,
  },
  iconBox: {gap: 6, alignItems: 'center'},
});
