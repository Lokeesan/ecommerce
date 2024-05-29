import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {IconButton, RadioButton} from 'react-native-paper';
import {theme} from '../../Config/Theme';

const PaymentCard = ({item}: {item: string}) => {
  return (
    <View style={[flexBoxStyle.row, styles.item, flexBoxStyle.alignCenter]}>
      <RadioButton status="checked" value="1" />
      <Text style={textStyles.text}>{item}</Text>
      <IconButton style={styles.iconButton} icon={'chevron-down'} />
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  item: {
    gap: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: theme.divider,
  },
  iconButton: {
    marginLeft: 'auto',
  },
});
