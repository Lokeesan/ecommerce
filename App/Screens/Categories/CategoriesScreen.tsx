import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FlatList} from 'react-native';
import ProductSmallCard from '../../Components/Cards/ProductSmallCard';
import TabView from './Components/TabView';
import {ScreenProps} from '../Type';
import RouterContextProvider from '../../Context/RouterContext';
import {
  horizontalScale,
  moderateScale,
} from '../../Common/Functions/Responsive';

const data = Array.from({length: 12});

const CategoriesScreen = (props: ScreenProps) => {
  return (
    <RouterContextProvider {...props}>
      <FlatList
        style={styles.container}
        ListHeaderComponent={TabView}
        stickyHeaderIndices={[0]}
        data={data}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <ProductSmallCard />}
        contentContainerStyle={styles.gap}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={styles.gap}
      />
    </RouterContextProvider>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  gap: {gap: moderateScale(6)},
  container: {
    paddingHorizontal: horizontalScale(12),
  },
});
