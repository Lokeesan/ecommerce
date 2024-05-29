import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {textStyles} from '../../Common/Styles';

const Terms = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={textStyles.title}>Sivas App Terms of Use</Text>
        <Text style={textStyles.label}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis
          aute irure dolor in reprehe nderit in voluptate velit esse cillum
          dolore eu fugiat nulla pa riatu Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id esSed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur maNeque porro
          quisquam est, qui dolorem ips um quia dolor sit amet, consectetur,
          adipisci velit, sed quUt enim ad minima veniam, quis nostrum
          exercitationem ullam corporis suscipit laboriosam, nisi ut alQuis
          autem vel eum i ure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatu
        </Text>
        <Text style={textStyles.title}>Purchase Terms</Text>
        <Text style={textStyles.label}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut laboreUt enim ad minim
        </Text>
        <Text style={textStyles.subtitle}>Purchase Terms</Text>
        <Text style={textStyles.label}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod
          tempor incididunt ut laboreUt enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo con Duis
          aute irure dolor in reprehe nderit in voluptate velit esse cillum
          dolore eu fugiat nulla pa riatu Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id esSed ut
          perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, to Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur maNeque porro
          quisquam est, qui dolorem ips um quia dolor sit amet, consectetur,
          adipisci velit, sed quUt
        </Text>
      </View>
    </ScrollView>
  );
};

export default Terms;

const styles = StyleSheet.create({
  main: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(34),
    gap: moderateScale(20),
  },
});
