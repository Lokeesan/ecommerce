import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {version} from 'react';
import {textStyles} from '../../Common/Styles';
import {theme} from '../../Config/Theme';
import RedeemCard from '../../Components/Cards/RedeemCard';
import {verticalScale} from '../../Common/Functions/Responsive';

const data = Array.from({length: 5});

const divider = () => <View style={styles.divider} />;

const RedeemHistory = () => {
  const headerComponent = (
    <View style={styles.header}>
      <Text style={textStyles.text}>Redeem History</Text>
    </View>
  );
  return (
    <FlatList
      ListHeaderComponent={headerComponent}
      stickyHeaderIndices={[0]}
      keyExtractor={(_, i) => i.toString()}
      renderItem={RedeemCard}
      ItemSeparatorComponent={divider}
      data={data}
    />
  );
};

export default RedeemHistory;

const styles = StyleSheet.create({
  header: {
    paddingBottom: verticalScale(10),
    marginBottom: verticalScale(10),
    backgroundColor: theme.background.default,
    borderBottomColor: theme.divider,
    borderBottomWidth: 1,
  },
  divider: {
    backgroundColor: theme.divider,
    width: '100%',
    marginVertical: verticalScale(12),
    height: 1,
  },
});
