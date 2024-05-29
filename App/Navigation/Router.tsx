import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {theme} from '../Config/Theme';

import AppDrawer from './DrawerNavigator';

const navigationTheme = {
  dark: false,
  colors: {
    background: theme.background.default,
    border: theme.divider,
    card: theme.background.level1,
    notification: theme.text.primary,
    primary: theme.primary.main,
    text: theme.text.primary,
  },
};

const Router = () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppDrawer />
    </NavigationContainer>
  );
};

export default Router;
