import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import NotificationCard from '../../Components/Cards/NotificationCard';
import {dividerStyle, textStyles} from '../../Common/Styles';
import {SectionList} from 'react-native';
import {theme} from '../../Config/Theme';
import {ScreenProps} from '../Type';
import RouterContextProvider from '../../Context/RouterContext';

const Notification = (props: ScreenProps) => {
  const data = Array.from({length: 4});

  const sectionData = [
    {
      title: 'Today',
      data: data,
    },
    {
      title: 'Yesterday',
      data: data,
    },
  ];

  const divider = () => (
    <View style={(dividerStyle.horizontal, {marginBottom: 1})} />
  );
  const sectionHeader = ({section: {title}}: any) => (
    <View style={styles.header}>
      <Text style={[textStyles.subtitle]}>{title}</Text>
    </View>
  );
  return (
    <RouterContextProvider {...props}>
      <SectionList
        style={styles.list}
        sections={sectionData}
        keyExtractor={(_, i) => i.toString()}
        ItemSeparatorComponent={divider}
        renderItem={NotificationCard}
        renderSectionHeader={sectionHeader}
      />
    </RouterContextProvider>
  );
};

export default Notification;

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: horizontalScale(20),
  },
  header: {
    paddingVertical: verticalScale(12),
    backgroundColor: theme.background.default,
  },
});
