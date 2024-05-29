import {FlatList, StyleSheet, View, Text} from 'react-native';
import React from 'react';
import CartCard from '../../Components/Cards/CartCard';
import {BtmTabButton} from '../ProductDetails/ProductDetails';
import {dividerStyle, flexBoxStyle, textStyles} from '../../Common/Styles';
import {
  horizontalScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';

const data = Array.from({length: 8});

const CartScreen = (props: ScreenProps) => {
  const divider = () => (
    <View
      style={[dividerStyle.horizontal, {marginVertical: verticalScale(12)}]}
    />
  );

  const handleNavigate = () => props.navigation.navigate(routes.REQ_LOGIN);

  const Footer = () => (
    <View
      style={[flexBoxStyle.bottomTabContainer, {height: verticalScale(160)}]}>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        <Text style={textStyles.subtitle}>Total</Text>
        <Text style={textStyles.subtitle}>150 QAR</Text>
      </View>
      <BtmTabButton onPress={handleNavigate} fill>
        Complete Order
      </BtmTabButton>
    </View>
  );
  return (
    <>
      <FlatList
        data={data}
        contentContainerStyle={styles.main}
        ItemSeparatorComponent={divider}
        renderItem={CartCard}
        keyExtractor={(_, i) => i.toString()}
      />
      <Footer />
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  main: {
    paddingVertical: verticalScale(24),
    paddingHorizontal: horizontalScale(14),
  },
});
