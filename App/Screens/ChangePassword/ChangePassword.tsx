import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {KeyboardView} from '../../Components/KeyboardView';
import {textStyles} from '../../Common/Styles';
import CustomTextField from '../../Components/TextInput/TextField';
import {Button} from '../../Components/Button';
import {moderateScale} from '../../Common/Functions/Responsive';

const ChangePassword = () => {
  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={textStyles.title}>Change Password</Text>
      </View>
      <View style={styles.form}>
        <CustomTextField
          type="password"
          label="Current Password *"
          placeholder="Enter Current Password"
        />
        <CustomTextField
          type="password"
          label="New Password *"
          placeholder="Enter New Password"
        />
        <CustomTextField
          type="password"
          label="Re-enter Password *"
          placeholder="Re-enter Password"
        />
        <Button> Change Password</Button>
      </View>
    </KeyboardView>
  );
};

export default ChangePassword;

const styles = StyleSheet.create({
  textContainer: {
    alignItems: 'center',
    gap: moderateScale(4),
    flex: 1,
    justifyContent: 'center',
  },
  form: {
    flex: 4,
    gap: moderateScale(14),
  },
});
