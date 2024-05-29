import {NavigationProp, RouteProp} from '@react-navigation/native';

// Define the props type for the screen component
type MyScreenRouteProp = RouteProp<any>;
type MyScreenNavigationProp = NavigationProp<any>;

export type ScreenProps = {
  route: MyScreenRouteProp;
  navigation: MyScreenNavigationProp;
};
