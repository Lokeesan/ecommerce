import {StyleSheet, Text, TextInput, TextInputProps, View} from 'react-native';
import React, {useMemo, useState} from 'react';
import {theme} from '../../Config/Theme';
import {textStyles} from '../../Common/Styles';
import {IconButton} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {KeyboardTypeOptions} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

type Props = TextInputProps & {
  label?: string;
  icon?: string;
  type?: 'email' | 'password' | 'number' | 'text';
};
const CustomTextField = (props: Props) => {
  const {label, type = 'text', icon, style, ...rest} = props;
  const [isShow, setIsShow] = useState(type === 'password');

  const togglePassword = () => setIsShow(prev => !prev);

  const renderIcon =
    type === 'password' ? (
      <IconButton
        onPress={togglePassword}
        icon={!isShow ? 'eye-off-outline' : 'eye-outline'}
        size={moderateScale(22)}
      />
    ) : (
      !!icon && (
        <Icon style={styles.icon} name={icon} size={moderateScale(22)} />
      )
    );

  const keyboardType: KeyboardTypeOptions = useMemo(() => {
    switch (type) {
      case 'email':
        return 'email-address';
      case 'number':
        return 'number-pad';
      case 'password':
        return 'visible-password';

      default:
        return 'default';
    }
  }, [type]);

  return (
    <View style={styles.main}>
      {!!label && <Text style={textStyles.label}>{label}</Text>}
      <View style={[styles.inputContainer, style]}>
        <TextInput
          keyboardType={keyboardType}
          style={styles.input}
          secureTextEntry={isShow}
          {...rest}
        />
        {renderIcon}
      </View>
    </View>
  );
};

export default CustomTextField;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.divider,
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  main: {
    gap: moderateScale(6),
  },
  icon: {
    paddingHorizontal: horizontalScale(10),
    color: theme.text.secondary,
  },
  input: {
    fontSize: moderateScale(14),
    paddingVertical: verticalScale(18),
    paddingHorizontal: horizontalScale(8),
    flex: 1,
  },
});
