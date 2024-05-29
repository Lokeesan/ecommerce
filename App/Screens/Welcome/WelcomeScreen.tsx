import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';
import {Container} from '../../Components/Container';
import {textStyles} from '../../Common/Styles';
import {DropDown} from '../../Components/DropDown';
import {Button} from '../../Components/Button';
import {ScreenProps} from '../Type';
import routes from '../../Navigation/Routes';
import {
  horizontalScale,
  moderateScale,
} from '../../Common/Functions/Responsive';

const welcome_img = require('../../../assets/images/welcome.png');
const logo_img = require('../../../assets/images/SivasLogo.png');

const countries = [
  {label: 'UAE', value: 'UAE'},
  {label: 'Qatar', value: 'Qatar'},
];

const languages = [
  {label: 'English', value: 'en'},
  {label: 'Arabic', value: 'ar'},
];

const WelcomeScreen = (props: ScreenProps) => {
  const {navigation} = props;

  const handleNavigation = (screen: string) => () =>
    navigation.navigate(screen);

  return (
    <View style={styles.main}>
      <View style={styles.imgContainer}>
        <Image source={welcome_img} style={styles.img} />
        <Image source={logo_img} style={styles.logo} />
      </View>
      <View style={styles.formContainer}>
        <Container>
          <View style={styles.form}>
            <Text style={[textStyles.title, {textAlign: 'center'}]}>
              Select your Country & Language
            </Text>
            <View style={styles.row}>
              <DropDown
                options={countries}
                label="Select country"
                placeholder="Country"
              />
              <DropDown
                options={languages}
                label="Select Language"
                placeholder="Language"
              />
            </View>
            <Button onPress={handleNavigation(routes.LOGIN_SCREEN)}>
              Next
            </Button>
          </View>
        </Container>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },

  logo: {
    width: horizontalScale(120),
    resizeMode: 'contain',
  },
  img: {
    width: '100%',
    resizeMode: 'cover',
    opacity: 0.5,
    position: 'absolute',
  },
  row: {
    flexDirection: 'row',
    gap: moderateScale(8),
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: moderateScale(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    gap: moderateScale(32),
    flex: 1,
    justifyContent: 'center',
  },
});
