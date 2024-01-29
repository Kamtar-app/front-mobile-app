import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const Heart = () => (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_70_3047)">
        <Path
          d="M11.406 4.998L12.5 6.974l1.094-1.976a5.416 5.416 0 014.618-2.792 5.833 5.833 0 015.539 6.046l-.001.023V8.3c0 1.44-.59 3.042-1.607 4.707-1.01 1.652-2.382 3.268-3.801 4.711a49.274 49.274 0 01-5.842 5.03 49.394 49.394 0 01-5.842-5.03c-1.42-1.444-2.79-3.06-3.8-4.711C1.838 11.34 1.25 9.74 1.25 8.299v-.024l-.001-.023a5.833 5.833 0 015.539-6.046 5.417 5.417 0 014.618 2.792z"
          fill="#000"
          fillOpacity={0.5}
          stroke="#fff"
          strokeWidth={2.5}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_70_3047">
          <Path fill="#fff" d="M0 0H25V25H0z" />
        </ClipPath>
      </Defs>
    </Svg>
)

