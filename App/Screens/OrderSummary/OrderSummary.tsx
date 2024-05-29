import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Progress} from '../../Components/Progress';
import {BtmTabButton} from '../ProductDetails/ProductDetails';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {moderateScale, verticalScale} from '../../Common/Functions/Responsive';
import OrderSummaryCard from '../../Components/Cards/OrderSummaryCard';
import ValidateCoupon from './ValidateCoupon';
import Summary from './Summary';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';

const OrderSummary = (props: ScreenProps) => {
  const data = Array.from({length: 2});
  const {navigation} = props;

  const handleNavigation = (screen: string) => () =>
    navigation.navigate(screen);

  const footer = () => (
    <View style={styles.list}>
      <ValidateCoupon />
      <Summary />
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={() => <Progress active={1} />}
        contentContainerStyle={styles.main}
        renderItem={OrderSummaryCard}
        ListFooterComponent={footer}
      />

      <View style={[flexBoxStyle.bottomTabContainer, styles.btmTab]}>
        <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
          <Text style={textStyles.subtitle}>Total</Text>
          <Text style={textStyles.subtitle}>150 QAR</Text>
        </View>
        <BtmTabButton onPress={handleNavigation(routes.PAYMENT_SCREEN)} fill>
          {'Continue'}
        </BtmTabButton>
      </View>
    </>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  main: {
    paddingTop: verticalScale(32),
    padding: moderateScale(20),
    gap: moderateScale(20),
  },
  btmTab: {height: verticalScale(150)},
  list: {
    gap: moderateScale(20),
  },
});
