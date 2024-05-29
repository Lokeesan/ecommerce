import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Progress} from '../../Components/Progress';
import {BtmTabButton} from '../ProductDetails/ProductDetails';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {moderateScale, verticalScale} from '../../Common/Functions/Responsive';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';
import Summary from '../OrderSummary/Summary';
import PaymentCard from './PaymentCard';

const OrderSummary = (props: ScreenProps) => {
  const data = [
    'UPI',
    'Credit / Debit / ATM Card',
    'Net Banking',
    'Cash on Delivery',
  ];
  const {navigation} = props;

  const handleNavigation = (screen: string) => () =>
    navigation.navigate(screen);

  const header = () => (
    <View style={styles.list}>
      <Progress active={2} />
      <Summary />
    </View>
  );

  const footer = () => (
    <Text
      style={[
        textStyles.caption,
        {marginVertical: verticalScale(12), textAlign: 'center'},
      ]}>
      Every 100 QAR purchase will get 10 Loyalty Points
    </Text>
  );

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={header}
        contentContainerStyle={styles.main}
        renderItem={PaymentCard}
        ListFooterComponent={footer}
      />

      <View style={[flexBoxStyle.bottomTabContainer, styles.btmTab]}>
        <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
          <Text style={textStyles.subtitle}>Total</Text>
          <Text style={textStyles.subtitle}>150 QAR</Text>
        </View>
        <BtmTabButton onPress={handleNavigation(routes.ORDER_SUCCESS)} fill>
          {'Continue'}
        </BtmTabButton>
      </View>
    </>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  main: {
    padding: moderateScale(20),
  },
  btmTab: {height: verticalScale(150)},
  list: {
    gap: moderateScale(40),
    marginBottom: moderateScale(40),
    marginTop: moderateScale(32),
  },
});
