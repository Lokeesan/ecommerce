import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {verticalScale} from '../../Common/Functions/Responsive';
import {theme} from '../../Config/Theme';
// import MapView from 'react-native-maps';

const initialRegion = {
  latitude: 25.30291514551776,
  longitude: 51.17173798121311,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const Map = () => {
  return null;
  // return (
  //   <MapView
  //     initialRegion={initialRegion}
  //     showsUserLocation
  //     followsUserLocation
  //     style={styles.map}
  //   />
  // );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
    height: verticalScale(200),
    backgroundColor: theme.divider,
    borderRadius: 4,
  },
});
