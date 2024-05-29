import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {theme} from '../../Config/Theme';
import {textStyles} from '../../Common/Styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';

type Props = {
  label?: string;
};

const CustomDatePicker = (props: Props) => {
  const {label} = props;
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const displayDate = date.toLocaleDateString();

  const openPicker = () => setOpen(true);
  const closePicker = () => setOpen(false);

  const onChange = (date: Date): void => {
    closePicker();
    setDate(date);
  };

  return (
    <View style={styles.main}>
      {!!label && <Text style={textStyles.label}>{label}</Text>}

      <TouchableOpacity onPress={openPicker} style={styles.inputContainer}>
        <Text style={styles.text}>{displayDate}</Text>
        <Icon
          style={styles.icon}
          name={'calendar-month-outline'}
          size={moderateScale(22)}
        />
      </TouchableOpacity>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={onChange}
        onCancel={closePicker}
      />
    </View>
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: theme.divider,
    borderRadius: moderateScale(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    paddingHorizontal: horizontalScale(10),
    color: theme.text.secondary,
  },
  main: {
    gap: moderateScale(6),
    flex: 1,
  },
  text: {
    fontSize: moderateScale(14),
    paddingVertical: verticalScale(18),
    paddingHorizontal: horizontalScale(8),
    flex: 1,
  },
});
