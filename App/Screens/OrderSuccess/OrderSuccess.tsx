import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {BtmTabButton} from '../ProductDetails/ProductDetails';
import {ScreenProps} from '../Type';
import {moderateScale, verticalScale} from '../../Common/Functions/Responsive';
import routes from '../../Navigation/Routes';
import BackgroundSVG from './bg_svg';
import DoneSvg from './Done_svg';
import {theme} from '../../Config/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const OrderSuccess = (props: ScreenProps) => {
  const {navigation} = props;

  const handleNavigation = (screen: string) => () =>
    navigation.navigate(screen);
  return (
    <>
      <View style={styles.main}>
        <BackgroundSVG />
        <View style={[flexBoxStyle.justifyCenter, flexBoxStyle.alignCenter]}>
          <DoneSvg />
          <Icon
            style={{position: 'absolute'}}
            size={48}
            name="check"
            color={'#fff'}
          />
        </View>
        <Text
          style={[
            textStyles.subtitle,
            textStyles.textCenter,
            {color: theme.success, width: '70%'},
          ]}>
          Your order has been placed successfully!
        </Text>
      </View>
      <View style={{flex: 1}}>
        <Text style={[textStyles.caption, textStyles.textCenter]}>
          You can easily track order in
        </Text>
        <Text style={[textStyles.label, textStyles.textCenter]}>
          “Track Your Order”
        </Text>
      </View>
      <View style={[flexBoxStyle.bottomTabContainer, styles.btmTab]}>
        <BtmTabButton onPress={handleNavigation(routes.HOME_SCREEN)} fill>
          {'Return to Home'}
        </BtmTabButton>
      </View>
    </>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({
  btmTab: {
    height: verticalScale(110),
  },
  main: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(16),
  },
});
