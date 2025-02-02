import * as React from 'react';
import Svg, {
  Path,
  Defs,
  Pattern,
  Use,
  LinearGradient,
  Stop,
  Image,
} from 'react-native-svg';
import {
  horizontalScale,
  verticalScale,
} from '../../../App/Common/Functions/Responsive';

function AdressSvgComponent() {
  return (
    <Svg
      width={horizontalScale(228)}
      height={verticalScale(189)}
      viewBox="0 0 228 189"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink">
      <Path
        d="M151.489 65.15L4.005 143.335c-5.05 2.678-5.05 9.391.005 12.065l59.598 31.55c5.244 2.779 11.713 2.724 16.903-.141l142.641-78.68c6.791-3.746 6.37-12.927-.739-16.13l-60.311-27.184c-3.38-1.515-7.356-1.392-10.613.333z"
        fill="#F4F4F4"
      />
      <Path
        d="M151.489 30.852L4.005 109.038c-5.05 2.679-5.05 9.392.005 12.066l59.598 31.55c5.244 2.779 11.713 2.724 16.903-.142l142.641-78.679c6.791-3.746 6.37-12.928-.739-16.131l-60.316-27.179c-3.375-1.52-7.351-1.396-10.608.329z"
        fill="#F4F4F4"
      />
      <Path
        d="M.302 114.053H.297l-.014.092c.004-.032.014-.06.02-.092z"
        fill="#2C1CB4"
      />
      <Path
        d="M227.99 65.61c.129 3.153-1.462 6.361-4.843 8.228L80.506 152.517c-5.19 2.861-11.659 2.916-16.903.141L4.005 121.104c-2.83-1.497-4.074-4.262-3.737-6.873-.114.803-.526 4.208-.04 7.886.08 2.268 1.333 4.504 3.777 5.8l59.598 31.55c5.244 2.779 11.713 2.724 16.903-.142l142.641-78.679c3.346-1.844 4.932-5.01 4.838-8.127l.005-.005V65.61z"
        fill="#CECECE"
      />
      <Path
        d="M17.126 106.013l72.243 38.879 123.428-67.75-72.595-36.976-123.076 65.847z"
        fill="#fff"
      />
      <Path
        d="M185.891 56.164c-.194 0-.387-.046-.57-.137l-15.769-8.031c-.57-.292-.773-.95-.46-1.474.312-.525 1.031-.712 1.601-.424l15.768 8.03c.57.288.773.95.461 1.475-.213.36-.615.561-1.031.561z"
        fill="#DBDBDB"
      />
      <Path
        d="M33.86 141.638a.698.698 0 01-.311-.073l-8.576-4.367c-.307-.16-.421-.516-.248-.803.174-.283.56-.388.873-.233l8.575 4.367c.307.16.421.516.248.803a.653.653 0 01-.56.306z"
        fill="#606060"
      />
      <Path
        d="M182.505 49.233c-.575.584-1.541.757-2.161.392-.62-.37-.654-1.136-.079-1.72.575-.584 1.541-.758 2.161-.393.619.365.654 1.136.079 1.72zM44.047 133.169c-3.266 2.204-7.94 2.172-10.434-.073-2.493-2.245-1.869-5.85 1.398-8.054 3.267-2.204 7.941-2.173 10.434.073 2.499 2.24 1.87 5.845-1.398 8.054z"
        fill="#DBDBDB"
      />
      <Path
        d="M8.437 127.264c0 .488-.432.885-.962.885s-.962-.397-.962-.885.432-.885.962-.885c.535.004.962.397.962.885zM11.252 129.03c0 .488-.431.885-.961.885s-.962-.397-.962-.885.431-.885.962-.885c.53.004.961.397.961.885zM14.47 130.444c0 .489-.432.886-.962.886s-.962-.397-.962-.886c0-.488.431-.885.962-.885.53 0 .961.397.961.885z"
        fill="#606060"
      />
      <Path
        fill="url(#pattern0)"
        opacity={0.4}
        d="M85.2203 63.1626H153.13060000000002V116.5524H85.2203z"
      />
      <Path
        d="M103.08 0C88.234.096 76.283 11.248 76.382 24.915c.104 13.667 27.293 55.411 27.293 55.411s26.564-42.086 26.465-55.753C130.041 10.91 117.921-.091 103.08 0zm.268 35.835c-7.114.045-12.923-5.23-12.968-11.778-.05-6.548 5.68-11.896 12.794-11.937 7.113-.046 12.918 5.23 12.967 11.778.045 6.548-5.68 11.891-12.793 11.937z"
        fill="url(#paint0_linear_2480_308)"
      />
      <Path
        opacity={0.62}
        d="M90.732 58.92c6.583 11.636 12.948 21.406 12.948 21.406s19.475-30.856 25.012-48.306c-6.112 14.47-25.052 27.083-37.96 26.9z"
        fill="url(#paint1_linear_2480_308)"
      />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#image0_2480_308" transform="scale(.0073 .00855)" />
        </Pattern>
        <LinearGradient
          id="paint0_linear_2480_308"
          x1={76.4993}
          y1={40.3343}
          x2={130.256}
          y2={39.9314}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DBDBDB" />
          <Stop offset={1} stopColor="#DBDBDB" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_2480_308"
          x1={93.7926}
          y1={75.1566}
          x2={119.005}
          y2={26.954}
          gradientUnits="userSpaceOnUse">
          <Stop stopColor="#DBDBDB" />
          <Stop offset={1} stopColor="#DBDBDB" />
        </LinearGradient>
        <Image
          id="image0_2480_308"
          width={137}
          height={117}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  );
}

export default AdressSvgComponent;
