import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Slider from './Components/Slider';
import Banner from './Components/Banner';
import TabView from './Components/TabView';
import ProductSmallCard from '../../Components/Cards/ProductSmallCard';
import {ScreenProps} from '../Type';
import RouterContextProvider from '../../Context/RouterContext';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const HomeScreen = (props: ScreenProps) => {
  const data = Array.from({length: 12});

  return (
    <RouterContextProvider {...props}>
      <FlatList
        style={styles.main}
        ListHeaderComponent={
          <View style={styles.header}>
            <Slider />
            <Banner />
            <TabView />
          </View>
        }
        data={data}
        keyExtractor={(item, i) => i.toString()}
        renderItem={() => <ProductSmallCard />}
        contentContainerStyle={styles.gap}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={styles.gap}
      />
    </RouterContextProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    gap: moderateScale(22),
    marginTop: verticalScale(22),
  },
  gap: {
    gap: moderateScale(6),
  },
  main: {
    paddingHorizontal: horizontalScale(12),
  },
});
