import {FlatList} from 'react-native';
import React from 'react';
import ProductSmallCard from '../../../Components/Cards/ProductSmallCard';
import {ScreenProps} from '../../Type';
import RouterContextProvider from '../../../Context/RouterContext';
import {moderateScale} from '../../../Common/Functions/Responsive';

const DisplayProducts = (props: ScreenProps) => {
  const gap = {
    gap: moderateScale(6),
  };

  return (
    <RouterContextProvider {...props}>
      <FlatList
        data={Array.from({length: 6})}
        keyExtractor={(_, i) => i.toString()}
        renderItem={() => <ProductSmallCard />}
        contentContainerStyle={gap}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        columnWrapperStyle={gap}
      />
    </RouterContextProvider>
  );
};

export default DisplayProducts;
