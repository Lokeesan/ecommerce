import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../../Config/Theme';
import {FlatList} from 'react-native';
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
      {item === active && <View style={styles.divider} />}
    </TouchableOpacity>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={tabs}
      renderItem={renderItem}
      style={styles.tabContainer}
    />
  );
};

export default TabView;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    height: verticalScale(50),
    marginBottom: verticalScale(12),
    paddingTop: verticalScale(12),
    borderBottomColor: theme.divider,
    borderBottomWidth: 1,
    backgroundColor: theme.background.default,
  },
  divider: {
    width: '100%',
    height: 2,
    backgroundColor: theme.primary.main,
    alignSelf: 'center',
    marginTop: verticalScale(8),
  },
  item: {
    paddingHorizontal: horizontalScale(27),
    paddingVertical: verticalScale(8),
  },
  itemText: {
    color: theme.background.level2,
    fontSize: moderateScale(16),
  },
  active: {
    color: theme.text.primary,
  },
});
