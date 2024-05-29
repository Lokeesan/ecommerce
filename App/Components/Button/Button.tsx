import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {textStyles} from '../../Common/Styles';
import {theme} from '../../Config/Theme';
import {moderateScale, verticalScale} from '../../Common/Functions/Responsive';

type Props = {
  children: string;
  color?: 'primary' | 'secondary';
  onPress?: () => void;
};

const OutlineButton = (props: Props) => {
  const {color = 'primary', onPress, children} = props;
  const btnLabelStyle = [textStyles.label, {color: theme[color].main}];
  const btnStyle = [styles.btn, {borderColor: theme[color].main}];

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={btnLabelStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const Button = (props: Props) => {
  const {color = 'primary', onPress, children} = props;
  const btnLabelStyle = [textStyles.subtitle, {color: '#fff'}];
  const btnStyle = [styles.containedBtn, {backgroundColor: theme[color].main}];

  return (
    <TouchableOpacity onPress={onPress} style={btnStyle}>
      <Text style={btnLabelStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

export {OutlineButton, Button};

const styles = StyleSheet.create({
  btn: {
    borderRadius: moderateScale(4),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
    borderWidth: 1,
  },
  containedBtn: {
    borderRadius: moderateScale(30),
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: verticalScale(16),
  },
});
