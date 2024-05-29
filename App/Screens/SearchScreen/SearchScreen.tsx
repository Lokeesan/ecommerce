import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {theme} from '../../Config/Theme';
import SearchBar from './Components/SearchBar';
import {IconButton} from 'react-native-paper';
import {ScreenProps} from '../Type';
import {FlatList} from 'react-native';
import {textStyles} from '../../Common/Styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

const data = Array.from({length: 5});

const SearchScreen = (props: ScreenProps) => {
  const handleGoBack = () => props.navigation.goBack();

  const renderComponent = () => (
    <TouchableOpacity style={styles.item}>
      <Text style={textStyles.text}>lorem ipsum</Text>
      <Icon name="arrow-top-left" size={moderateScale(16)} />
    </TouchableOpacity>
  );

  const divider = () => <View style={styles.divider} />;

  return (
    <View style={styles.main}>
      <View>
        <View style={styles.row}>
          <SearchBar />
          <IconButton icon="close" onPress={handleGoBack} />
        </View>
        <FlatList
          style={styles.paper}
          renderItem={renderComponent}
          ItemSeparatorComponent={divider}
          data={data}
          keyExtractor={(_, i) => i.toString()}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.divider,
    flex: 1,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(12),
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: theme.divider,
    marginVertical: verticalScale(2),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: moderateScale(4),
  },
  paper: {
    backgroundColor: theme.background.default,
    borderRadius: moderateScale(10),
    marginTop: verticalScale(10),
  },
  item: {
    paddingHorizontal: horizontalScale(24),
    paddingVertical: verticalScale(12),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
