import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {theme} from '../../../Config/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../Common/Functions/Responsive';

const SearchBar = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput autoFocus style={styles.input} placeholder="Search products" />
      <Icon name="search-outline" size={moderateScale(16)} />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.background.default,
    borderRadius: moderateScale(5),
    flex: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(12),
  },
  input: {
    paddingVertical: verticalScale(12),
    flex: 1,
  },
});
