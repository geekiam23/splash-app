import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

// TODO: Fix color issue
const Heart = ({color = '#000', size = 20}) => {
  return (
    <View>
      <Svg
        width={size}
        height={size}
        viewBox="0 0 16 14"
        stroke="#FFF"
        fill={color}>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.00916 2.17877L7.19391 1.36352C5.583 -0.247394 2.9712 -0.247394 1.36028 1.36352C-0.250629 2.97443 -0.250629 5.58624 1.36028 7.19715L7.98941 13.8263L7.99076 13.8249L8.01051 13.8447L14.6396 7.21555C16.2505 5.60464 16.2505 2.99283 14.6396 1.38192C13.0287 -0.228992 10.4169 -0.228992 8.80601 1.38192L8.00916 2.17877ZM7.99076 11.7036L11.6929 8.00143L12.781 6.95065L12.7821 6.95174L13.579 6.15489C14.6041 5.12977 14.6041 3.46771 13.579 2.44258C12.5539 1.41745 10.8918 1.41745 9.86667 2.44258L8.00997 4.29928L8.00454 4.29385L8.00373 4.29466L6.13325 2.42418C5.10813 1.39905 3.44607 1.39905 2.42094 2.42418C1.39582 3.44931 1.39582 5.11136 2.42094 6.13649L4.32551 8.04106L4.32686 8.03971L7.99076 11.7036Z"
        />
      </Svg>
    </View>
  );
};

export default Heart;
