import {
  FlatList,
  ListRenderItemInfo,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {dividerStyle, flexBoxStyle, textStyles} from '../../Common/Styles';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const menus = [
  {
    icon: 'email-outline',
    title: 'Email Us',
    desc: 'Tell us your query and we will reply to you in a short time',
  },
  {
    icon: 'whatsapp',
    title: 'Whatsapp',
    desc: '08:00 AM to 05:00 PM ',
  },
  {
    icon: 'phone',
    title: 'Call Us',
    desc: '+974 4418 1444',
  },
];

const Contact = () => {
  const renderItem = ({
    item,
  }: ListRenderItemInfo<{
    icon: string;
    title: string;
    desc: string;
  }>) => (
    <View style={[flexBoxStyle.row, flexBoxStyle.alignCenter, styles.item]}>
      <Icons name={item.icon} size={32} />
      <View style={styles.textContainer}>
        <Text style={[textStyles.subtitle, {fontWeight: '800'}]}>
          {item.title}
        </Text>
        <Text style={textStyles.text}>{item.desc}</Text>
      </View>
    </View>
  );

  const divider = () => <View style={dividerStyle.horizontal} />;

  return (
    <View style={styles.main}>
      <Text style={textStyles.title}>Talk to us</Text>
      <FlatList
        data={menus}
        scrollEnabled={false}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        ItemSeparatorComponent={divider}
      />
    </View>
  );
};

export default Contact;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(34),
    gap: moderateScale(20),
  },
  textContainer: {gap: 6, flex: 1},
  item: {
    gap: 22,
    paddingVertical: verticalScale(12),
    paddingHorizontal: horizontalScale(14),
  },
});
