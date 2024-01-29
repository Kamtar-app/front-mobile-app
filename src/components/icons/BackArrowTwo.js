import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { colors } from "../../assets/styles/constants/colors";

export const BackArrowTwo = ({ color = colors.black }) => (
  <Svg
    width={14}
    height={12}
    viewBox="0 0 14 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M5.20759e-07 6C-0.000999826 5.336 0.255001 4.706 0.722001 4.234L4.64 0.153001C4.738 0.0510007 4.869 1.10909e-06 5 1.12054e-06C5.125 1.13147e-06 5.249 0.0460007 5.347 0.140001C5.546 0.33 5.552 0.648001 5.361 0.847001L1.438 4.933C1.275 5.098 1.156 5.291 1.083 5.5L13.5 5.5C13.776 5.5 14 5.724 14 6C14 6.276 13.776 6.5 13.5 6.5L1.089 6.5C1.164 6.708 1.285 6.898 1.447 7.059L5.401 11.108C5.594 11.305 5.59 11.622 5.393 11.815C5.195 12.007 4.878 12.004 4.686 11.806L0.738001 7.763C0.269001 7.301 0.00500058 6.667 5.20759e-07 6Z"
      fill={color}
    />
  </Svg>
);
