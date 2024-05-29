import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
import {textStyles} from '../../Common/Styles';

const AboutScreen = () => {
  return (
    <ScrollView>
      <View style={styles.main}>
        <Text style={textStyles.title}>About Sivas</Text>
        <Text style={textStyles.subtitle}>Excelling Qatar Hospitality</Text>
        <Text style={textStyles.label}>
          Qatar has emerged and established as a developed nation in economy,
          governance, education, tourism, infrastructure safety and life
          quality. A nation that inspires and influences the world through its
          glorious achievements under a strong leadership setting on example to
          the Arab world with solidarity and vision for empowerment through
          equality, education, safety, tradition, cultural values, hospitality
          and tourism, blending with modern world
        </Text>
        <Text style={textStyles.subtitle}>The Golden Legacy</Text>
        <Text style={textStyles.label}>
          Sivas was founded in Qatar in 1972 upholding our nations tradition and
          values. We build our business on reputation and loyalty that fueled us
          to serve generation till the date. With are disruptive, thus our
          company’s strategy shifted from wholesale to retail business in 2011,
          and opened doors for the independent retail showroom at various
          spectacular shopping malls across Qatar. Currently we are branched at
          Tawar Mall, Q-Mall, Palms Mall, Ezdan Mall Al Wakra and expanding more
          locally and globally
        </Text>
        <Text style={textStyles.subtitle}>The Mission & Vision</Text>
        <Text style={textStyles.label}>
          We Strives to be a part of every Qatari family, ensuring our products
          bring premium, joy and comfort to every household and delivering and
          demonstrating the highest levels of integrity in every aspect of our
          business
        </Text>
        <Text style={textStyles.subtitle}>Brand Purpose</Text>
        <Text style={textStyles.label}>
          To faster a sense of community, connection and happiness to home. We
          deliver a new generation of “Hospitality” through products and
          services that promote and reflect the values we uphold.
        </Text>
        <Text style={textStyles.subtitle}>Core Values</Text>
        <View>
          <Text style={textStyles.label}>{`\u2022 Quantity`}</Text>
          <Text style={textStyles.label}>{`\u2022 Honor`}</Text>
          <Text style={textStyles.label}>{`\u2022 Diligence`}</Text>
          <Text style={textStyles.label}>{`\u2022 Care`}</Text>
        </View>
        <Text style={textStyles.subtitle}>Our Product</Text>
        <Text style={textStyles.label}>
          We offer a wide range of products that are essential in every home in
          Qatar. Moreover, gaining our customer’s loyalty and trust are one of
          our priorities, and that is achieved by building a sense of belonging
          within the Sivas community and by staying connected to them
        </Text>
      </View>
    </ScrollView>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  title: {
    fontWeight: '600',
  },
  main: {
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(34),
    gap: moderateScale(20),
  },
});
