import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {textStyles} from '../../Common/Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRouterContext} from '../../Context/RouterContext';
import routes, {routers} from '../../Navigation/Routes';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const img = require('../../../assets/images/products/2.png');

const ProductSmallCard = () => {
  const router = useRouterContext();

  const handleNavigation = () =>
    router?.navigation.navigate(routers.PRODUCT_ROUTER, {
      screen: routes.PRODUCT_DETAILS,
    });

  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.card}>
      <Image style={styles.img} source={img} />
      <Text style={styles.tag}>Limited Collection</Text>
      <View>
        <Text
          numberOfLines={1}
          style={[textStyles.label, {fontSize: moderateScale(13)}]}>
          Lorem ipsum dolor
        </Text>
        <Text style={styles.subtitle}>lorem ipsum</Text>
      </View>
      <View style={styles.row}>
        <Text style={[textStyles.label, styles.price]}>75 QAR</Text>
        <Text style={[textStyles.label, styles.delPrice]}>125 QAR</Text>
      </View>
      <TouchableOpacity style={styles.btn}>
        <Icon name="cart-outline" color={'#fff'} size={moderateScale(14)} />
        <Text
          style={[
            textStyles.label,
            {color: '#fff', fontSize: moderateScale(8)},
          ]}>
          ADD TO CART
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default ProductSmallCard;

const styles = StyleSheet.create({
  tag: {
    backgroundColor: 'crimson',
    color: '#fff',
    position: 'absolute',
    top: verticalScale(10),
    fontSize: moderateScale(8),
    padding: moderateScale(4),
    left: horizontalScale(10),
  },
  delPrice: {fontSize: moderateScale(12), textDecorationLine: 'line-through'},
  price: {color: theme.text.primary, fontWeight: '600'},
  btn: {
    backgroundColor: theme.primary.main,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    gap: moderateScale(6),
    paddingVertical: verticalScale(6),
  },
  subtitle: {
    fontSize: moderateScale(10),
    color: theme.text.secondary,
  },
  img: {
    height: verticalScale(100),
    width: '100%',
    resizeMode: 'cover',
    borderRadius: moderateScale(6),
  },
  card: {
    padding: moderateScale(4),
    flex: 1,
    gap: moderateScale(8),
    borderWidth: 1,
    borderColor: theme.divider,
    overflow: 'hidden',
    borderRadius: moderateScale(8),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
