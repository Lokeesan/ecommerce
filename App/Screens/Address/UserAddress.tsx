import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AdressSvgComponent from '../../../assets/images/SVG/address';
import {Progress} from '../../Components/Progress';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {BtmTabButton} from '../ProductDetails/ProductDetails';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';
import {theme} from '../../Config/Theme';
import {RadioButton} from 'react-native-paper';

const UserAddress = (props: ScreenProps) => {
  const handleNavigate = (screen: string) => () =>
    props.navigation.navigate(screen);

  const data = Array.from({length: 2});

  const thereIsNoAddress = !data?.length;

  const renderList = () => (
    <View style={styles.listItem}>
      <View style={[flexBoxStyle.row, {gap: moderateScale(6)}]}>
        <RadioButton
          color={theme.primary.main}
          uncheckedColor={theme.secondary.main}
          value={''}
          status="checked"
        />
        <View style={{gap: moderateScale(4)}}>
          <Text style={textStyles.subtitle}>Username</Text>
          <Text style={textStyles.label}>House/Building</Text>
          <Text style={textStyles.label}>Street</Text>
          <Text style={textStyles.label}>City</Text>
          <Text style={textStyles.label}>Country</Text>
        </View>
      </View>
    </View>
  );
  const emptyCart = (
    <View style={[styles.emtContent]}>
      <AdressSvgComponent />
      <View style={flexBoxStyle.flex}>
        <Text style={textStyles.label}>There are no saved address</Text>
      </View>
    </View>
  );

  const footer = () => (
    <View style={styles.footer}>
      <TouchableOpacity
        onPress={handleNavigate(routes.ADD_ADDRESS)}
        style={styles.outlineBtn}>
        <Text style={textStyles.label}>New Address</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <FlatList
        data={data}
        ListHeaderComponent={Progress}
        style={styles.main}
        contentContainerStyle={styles.list}
        renderItem={renderList}
        ListEmptyComponent={emptyCart}
        ListFooterComponent={thereIsNoAddress ? undefined : footer}
      />

      <View style={[flexBoxStyle.bottomTabContainer, styles.btmTab]}>
        <BtmTabButton
          onPress={handleNavigate(
            thereIsNoAddress ? routes.ADD_ADDRESS : routes.ORDER_SUMMARY,
          )}
          fill>
          {thereIsNoAddress ? 'Add address' : 'Continue'}
        </BtmTabButton>
      </View>
    </>
  );
};

export default UserAddress;

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: theme.divider,
    padding: moderateScale(14),
    borderRadius: 4,
  },

  main: {
    paddingTop: verticalScale(32),
    padding: moderateScale(20),
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlineBtn: {
    borderWidth: 1,
    borderColor: theme.primary.main,
    paddingVertical: verticalScale(6),
    paddingHorizontal: horizontalScale(12),
    borderRadius: moderateScale(18),
  },
  emtContent: {
    gap: verticalScale(32),
    alignItems: 'center',
    paddingVertical: '30%',
  },
  list: {
    gap: moderateScale(20),
  },
  btmTab: {height: verticalScale(110)},
});
