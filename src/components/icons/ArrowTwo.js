import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../assets/styles/constants/colors";

export const ArrowTwo = ({ color = colors.black, size = 15 }) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M9.93453 7.80953L5.55953 12.1845C5.51888 12.2252 5.47063 12.2574 5.41752 12.2794C5.36441 12.3014 5.30748 12.3127 5.25 12.3127C5.19251 12.3127 5.13559 12.3014 5.08248 12.2794C5.02937 12.2574 4.98112 12.2252 4.94047 12.1845C4.89982 12.1439 4.86758 12.0956 4.84558 12.0425C4.82358 11.9894 4.81226 11.9325 4.81226 11.875C4.81226 11.8175 4.82358 11.7606 4.84558 11.7075C4.86758 11.6544 4.89982 11.6061 4.94047 11.5655L9.00648 7.5L4.94047 3.43453C4.85837 3.35244 4.81226 3.2411 4.81226 3.125C4.81226 3.0089 4.85837 2.89756 4.94047 2.81547C5.02256 2.73338 5.1339 2.68726 5.25 2.68726C5.3661 2.68726 5.47744 2.73338 5.55953 2.81547L9.93453 7.19047C9.97521 7.2311 10.0075 7.27935 10.0295 7.33246C10.0515 7.38557 10.0628 7.4425 10.0628 7.5C10.0628 7.55749 10.0515 7.61442 10.0295 7.66754C10.0075 7.72065 9.97521 7.7689 9.93453 7.80953Z"
      fill={color}
    />
  </Svg>
);
