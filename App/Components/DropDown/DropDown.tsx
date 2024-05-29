import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {textStyles} from '../../Common/Styles';
import {theme} from '../../Config/Theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
type Props = {
  label?: string;
  placeholder?: string;
  options: {label: string; value: string}[];
};

const DropDown = (props: Props) => {
  const {label, placeholder, options} = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);

  return (
    <View style={styles.main}>
      {!!label && <Text style={textStyles.label}>{label}</Text>}

      <DropDownPicker
        open={open}
        style={styles.dropDown}
        value={value}
        items={options}
        dropDownContainerStyle={styles.dropDownContainer}
        placeholder={placeholder}
        setOpen={setOpen}
        setValue={setValue}
        dropDownDirection="TOP"
      />
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  main: {
    gap: moderateScale(6),
    flex: 1,
  },
  item: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(8),
    paddingVertical: verticalScale(16),
  },
  model: {
    zIndex: 1000,
  },
  dropDownContainer: {
    borderColor: theme.divider,
  },
  dropDown: {
    backgroundColor: theme.divider,
    borderRadius: moderateScale(4),
    borderWidth: 0,
    zIndex: 100,
  },
});
