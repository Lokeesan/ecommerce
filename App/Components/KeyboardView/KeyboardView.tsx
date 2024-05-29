import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {Container} from '../Container';

const KeyboardView = (props: PropsWithChildren) => {
  const dismissKeyBoard = () => Keyboard.dismiss();

  return (
    <Container>
      <TouchableWithoutFeedback onPress={dismissKeyBoard}>
        <KeyboardAvoidingView style={styles.main}>
          {props.children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </Container>
  );
};

export default KeyboardView;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
