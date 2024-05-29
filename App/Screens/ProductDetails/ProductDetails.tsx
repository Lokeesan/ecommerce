import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Image} from 'react-native';
import {theme} from '../../Config/Theme';
import {textStyles} from '../../Common/Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const img = require('../../../assets/images/products/1.png');

const ProductDetails = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.main}>
          <Image source={img} style={styles.image} />

          <View style={styles.textGap}>
            <Text style={textStyles.subtitle}>lorem ipsum</Text>
            <Text style={textStyles.label}>lorem ipsum</Text>
          </View>
          <View style={styles.textGap}>
            <View style={styles.row}>
              <Text style={textStyles.title}>100 QAR</Text>
              <Text style={styles.delText}>100 QAR</Text>
            </View>
            <Text style={[textStyles.link, {color: theme.success}]}>
              You can save up to 50%
            </Text>
          </View>
          <View style={styles.divider} />
          <Text style={textStyles.text}>Available Colors</Text>
          <View style={styles.row}>
            <View
              style={[
                styles.colorDot,
                styles.activeDot,
                {backgroundColor: 'red'},
              ]}
            />
            <View style={[styles.colorDot, {backgroundColor: 'blue'}]} />
          </View>
          <Text style={textStyles.text}>Product Description</Text>
          <Text style={textStyles.label}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, odio
            quas. Illo eveniet asperiores ipsum dolorem doloribus dolorum totam
            recusandae consequatur nulla sed harum nemo commodi, dicta iure
            inventore. Suscipit!
          </Text>
          <Text style={textStyles.text}>Product Details</Text>
          <View style={styles.textGap}>
            <Text style={textStyles.label}>{`\u2022 Quantity  :   1`}</Text>
            <Text
              style={
                textStyles.label
              }>{`\u2022 Size         :   00x00x00`}</Text>
            <Text
              style={textStyles.label}>{`\u2022 Weight    :   00.00kg`}</Text>
            <Text
              style={textStyles.label}>{`\u2022 Material  :   Ceramic`}</Text>
            <Text
              style={
                textStyles.label
              }>{`\u2022 Color       :   Moss Green`}</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.btnContainer}>
        <BtmTabButton name="shopping" fill>
          BUY NOW
        </BtmTabButton>
        <BtmTabButton name="cart-outline">IN CART</BtmTabButton>
      </View>
    </>
  );
};

type ButtonProps = {
  onPress?: () => void;
  name?: string;
  fill?: boolean;
};

export const BtmTabButton = (props: PropsWithChildren<ButtonProps>) => (
  <TouchableOpacity
    style={[styles.btn, props.fill && styles.fill]}
    onPress={props.onPress}>
    {props?.name && (
      <Icon
        name={props.name}
        color={props.fill ? '#fff' : theme.primary.main}
        size={18}
      />
    )}
    <Text
      style={[
        textStyles.text,
        {
          fontWeight: '600',
          color: props.fill ? '#fff' : theme.primary.main,
        },
      ]}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

export default ProductDetails;

const styles = StyleSheet.create({
  btn: {
    paddingVertical: verticalScale(14),
    borderWidth: 1,
    borderColor: theme.primary.main,
    borderRadius: moderateScale(30),
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: moderateScale(12),
    flexDirection: 'row',
  },
  fill: {
    backgroundColor: theme.primary.main,
  },
  btnContainer: {
    borderTopRightRadius: moderateScale(20),
    borderTopLeftRadius: moderateScale(20),
    backgroundColor: theme.background.default,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: moderateScale(20),
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(16),

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  colorDot: {
    width: horizontalScale(40),
    height: verticalScale(40),
    borderRadius: moderateScale(20),
    borderWidth: 3,
    borderColor: '#fff',
  },
  activeDot: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  delText: {textDecorationLine: 'line-through', color: theme.text.secondary},
  divider: {
    borderBottomColor: theme.divider,
    borderBottomWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: moderateScale(10),
  },
  textGap: {
    gap: moderateScale(4),
  },
  main: {
    padding: moderateScale(20),
    flex: 1,
    gap: moderateScale(16),
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
    height: verticalScale(300),

    backgroundColor: theme.divider,
    borderRadius: moderateScale(10),
  },
});
