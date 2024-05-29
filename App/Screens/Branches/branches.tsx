import {
  FlatList,
  ListRenderItemInfo,
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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Button} from '../../Components/Button';

const branches = Object.freeze([
  {
    name: 'Mall of Qatar - Al Rayyan',
    phone: 44830444,
  },
  {
    name: 'Gulf Mall - Al Gharafa',
    phone: 44832444,
  },
  {
    name: 'Tawar Mall - Al Duhail',
    phone: 44188444,
  },
  {
    name: 'Qmall - Al Gharafa',
    phone: 44170444,
  },
  {
    name: 'Ezdan Mall - Al Gharafa',
    phone: 44831444,
  },
  {
    name: 'Ezdan Mall - Al Wakra',
    phone: 44149444,
  },
  {
    name: 'Palms Mall - Al Muaither',
    phone: 44179444,
  },
  {
    name: 'Place Vendome  - Lusail',
    phone: 44160444,
  },
]);
const renderItem = ({
  item,
}: ListRenderItemInfo<{
  name: string;
  phone: number;
}>) => {
  return (
    <View
      style={[
        flexBoxStyle.row,
        flexBoxStyle.alignCenter,
        {paddingVertical: verticalScale(16)},
      ]}>
      <View style={{gap: moderateScale(6)}}>
        <Text style={textStyles.subtitle}>{item.name}</Text>
        <Text style={textStyles.text}>{item.phone}</Text>
      </View>
      <View
        style={[
          flexBoxStyle.row,
          flexBoxStyle.alignCenter,
          {marginLeft: 'auto'},
        ]}>
        <Icon name="map-marker-outline" size={24} />
        <Button>Call me</Button>
      </View>
    </View>
  );
};

const divider = () => <View style={dividerStyle.horizontal} />;

const Branches = () => {
  const header = (
    <Text
      style={[
        textStyles.title,
        {
          marginBottom: moderateScale(24),
        },
      ]}>
      Our Branches
    </Text>
  );
  return (
    <FlatList
      style={styles.container}
      ListHeaderComponent={header}
      data={branches}
      keyExtractor={(_, i) => i.toString()}
      renderItem={renderItem}
      ItemSeparatorComponent={divider}
    />
  );
};

export default Branches;

const styles = StyleSheet.create({
  container: {
    paddingVertical: verticalScale(34),
    paddingHorizontal: horizontalScale(28),
  },
});
