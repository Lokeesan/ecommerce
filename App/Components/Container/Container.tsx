import {Dimensions, StyleSheet, View, ViewStyle} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {horizontalScale} from '../../Common/Functions/Responsive';

const Container = (props: PropsWithChildren<{style?: ViewStyle}>) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 400, // Set your desired maximum width here
    width: '100%', // Ensure the container takes up the available width
    alignSelf: 'center', // Center the container horizontally
    paddingHorizontal: horizontalScale(20),
  },
});
