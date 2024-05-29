import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import {textStyles} from '../../Common/Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProductSmallCard from '../../Components/Cards/ProductSmallCard';
import {ScreenProps} from '../Type';
import RouterContextProvider from '../../Context/RouterContext';
import {
  horizontalScale,
  moderateScale,
} from '../../Common/Functions/Responsive';

const header = () => (
  <>
    <View style={styles.btnContainer}>
      <TouchableOpacity style={styles.btn}>
        <Icon name="sort" size={22} color={theme.text.secondary} />
        <Text style={textStyles.label}>Sort</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn}>
        <Icon name="filter-outline" size={22} color={theme.text.secondary} />
        <Text style={textStyles.label}>Filter</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.divider} />
  </>
);

const OffersScreen = (props: ScreenProps) => {
  const data = Array.from({length: 12});

  return (
    <RouterContextProvider {...props}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={header}
        stickyHeaderIndices={[0]}
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <ProductSmallCard />}
        contentContainerStyle={styles.gap}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.gap}
      />
    </RouterContextProvider>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: theme.background.default,
  },
  gap: {
    gap: moderateScale(18),
  },
  btn: {
    padding: moderateScale(14),
    flex: 1,
    gap: moderateScale(6),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(18),
  },
  divider: {
    borderBottomColor: theme.divider,
    borderBottomWidth: 1,
  },
});
