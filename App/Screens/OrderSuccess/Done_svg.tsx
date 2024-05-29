import * as React from 'react';
import Svg, {Ellipse, Circle, Rect, Defs, Pattern, Use} from 'react-native-svg';
import {
  horizontalScale,
  verticalScale,
} from '../../Common/Functions/Responsive';
const SVGComponent = () => (
  <Svg
    width={horizontalScale(92)}
    height={verticalScale(92)}
    viewBox="0 0 92 93"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink">
    <Ellipse cx={46} cy={46.5} rx={46} ry={46.5} fill="#E2F2E3" />
    <Circle cx={45.5} cy={46.5} r={41.5} fill="#AAE4B0" />
    <Ellipse cx={46} cy={46.5} rx={35} ry={34.5} fill="#74D77E" />
    {/* <Rect x={24} y={25} width={43} height={42} fill="url(#pattern0_2776_617)" /> */}
    <Defs>
      <Pattern
        id="pattern0_2776_617"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use
          xlinkHref="#image0_2776_617"
          transform="matrix(0.00195349 0 0 0.002 0.0116279 0)"
        />
      </Pattern>
    </Defs>
  </Svg>
);
export default SVGComponent;
