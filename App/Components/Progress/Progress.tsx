import {StyleSheet, Text, View} from 'react-native';
import React, {Fragment} from 'react';
import {flexBoxStyle, textStyles} from '../../Common/Styles';
import {
  horizontalScale,
  moderateScale,
} from '../../Common/Functions/Responsive';
import {theme} from '../../Config/Theme';

const steps = Object.freeze(['Address', 'Order Summary', 'Payment']);

type Props = {
  active?: number;
};

const Progress = ({active = 0}: Props) => {
  const renderDotWithDivider = steps.map((s, i) =>
    i <= active ? (
      <Fragment key={i}>
        <View style={styles.outlineDot}>
          <View style={[styles.dot, styles.activeDot]} />
        </View>
        {steps.length - 1 > i && (
          <View
            style={[
              styles.divider,
              i < active && {borderBottomColor: theme.success},
            ]}
          />
        )}
      </Fragment>
    ) : (
      <Fragment key={i}>
        <View style={styles.dot} />
        {steps.length - 1 > i && <View style={styles.divider} />}
      </Fragment>
    ),
  );

  return (
    <View
      style={{gap: moderateScale(16), marginHorizontal: horizontalScale(32)}}>
      <View
        style={[
          flexBoxStyle.row,
          flexBoxStyle.alignCenter,
          {marginHorizontal: horizontalScale(24)},
        ]}>
        {renderDotWithDivider}
      </View>
      <View style={[flexBoxStyle.row, flexBoxStyle.spaceBetween]}>
        {steps.map((s, i) => (
          <Text
            key={i}
            style={[
              textStyles.label,
              {color: i <= active ? theme.text.primary : theme.text.secondary},
            ]}>
            {s}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default Progress;

const styles = StyleSheet.create({
  dot: {
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: moderateScale(5),
    backgroundColor: theme.divider,
  },
  divider: {
    borderBottomColor: theme.divider,
    borderBottomWidth: 1,
    flex: 1,
  },
  activeDot: {
    backgroundColor: theme.success,
    shadowColor: theme.success,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 1,
    shadowRadius: 9.11,
    elevation: 1,
  },
  outlineDot: {
    borderWidth: 1,
    padding: 6,
    borderColor: theme.success,
    borderRadius: 12,
  },
});
