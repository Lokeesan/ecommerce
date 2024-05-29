import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {textStyles} from '../../Common/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useRouterContext} from '../../Context/RouterContext';
import routes from '../../Navigation/Routes';

const NotificationCard = () => {
  const props = useRouterContext();

  const handleNavigation = () =>
    props?.navigation.navigate(routes.NOTIFICATION);

  return (
    <TouchableOpacity
      onPress={handleNavigation}
      activeOpacity={0.8}
      style={styles.card}>
      <Icon size={20} color={theme.text.secondary} name="shopping-outline" />
      <View>
        <Text style={[textStyles.text, {fontSize: moderateScale(14)}]}>
          NotificationCard
        </Text>
        <Text style={textStyles.caption}>NotificationCard</Text>
      </View>
      <View style={styles.rightBox}>
        <Text style={textStyles.caption}>10:10 am</Text>
        <Icon color={theme.text.secondary} name="chevron-right" size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  rightBox: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 19,
    backgroundColor: theme.divider,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(16),
    borderRadius: 10,
  },
});
