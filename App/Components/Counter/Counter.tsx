import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {theme} from '../../Config/Theme';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

type Props = {
  minVal?: number;
  maxVal?: number;
};

export default function Counter(props: Props) {
  const {maxVal = 100, minVal = 1} = props;
  const [count, setCount] = useState(minVal);

  const handleIncrement = () =>
    setCount(prev => (prev >= maxVal ? maxVal : prev + 1));

  const handleDecrement = () =>
    setCount(prev => (prev <= minVal ? minVal : prev - 1));

  return (
    <View style={styles.counter}>
      <TouchableOpacity onPress={handleDecrement} style={styles.iconBtn}>
        <Icon name="minus" size={moderateScale(18)} />
      </TouchableOpacity>
      <Text>{count}</Text>
      <TouchableOpacity onPress={handleIncrement} style={styles.iconBtn}>
        <Icon name="plus" size={moderateScale(18)} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  counter: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(13),
  },
  iconBtn: {
    borderWidth: 1,
    borderColor: theme.primary.main,
    width: horizontalScale(26),
    height: verticalScale(26),
    justifyContent: 'center',
    borderRadius: moderateScale(13),
    alignItems: 'center',
  },
});
