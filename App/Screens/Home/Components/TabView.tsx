import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../Config/Theme';
import {dividerStyle} from '../../../Common/Styles';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../Common/Functions/Responsive';

const tabs = ['All', 'Kitchenware', 'Home', 'Majlis', 'Others'];

const TabView = () => {
  const [active, setActive] = useState('All');

  const handleSetActive = (val: string) => () => setActive(val);

  const renderItem = ({item}: {item: string}) => (
    <TouchableOpacity style={styles.item} onPress={handleSetActive(item)}>
      <Text style={[styles.itemText, item === active && styles.active]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  const divider = () => <View style={dividerStyle.vertical} />;

  return (
    <FlatList
      data={tabs}
      keyExtractor={(_, i) => i.toString()}
      horizontal
      ItemSeparatorComponent={divider}
      showsHorizontalScrollIndicator={false}
      renderItem={renderItem}
      style={{paddingBottom: 16, backgroundColor: theme.background.default}}
    />
  );
};

export default TabView;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: horizontalScale(27),
    paddingVertical: verticalScale(8),
  },
  itemText: {
    color: theme.background.level2,
    fontSize: moderateScale(17),
  },
  active: {
    color: theme.text.primary,
  },
});
