import { Svg, Path, G, ClipPath, Rect, Defs } from "react-native-svg";

export const Phone = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="20"
      viewBox="0 0 19 20"
      fill="none"
    >
      <G clip-path="url(#clip0_111_4148)">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9.032 10.472C13.021 14.46 13.926 9.846 16.466 12.384C18.915 14.832 20.322 15.322 17.22 18.424C16.831 18.736 14.362 22.494 5.685 13.819C-2.992 5.144 0.761997 2.672 1.074 2.284C4.184 -0.826002 4.666 0.588998 7.115 3.037C9.654 5.576 5.043 6.484 9.032 10.472Z"
          fill="black"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_111_4148">
          <Rect
            width="19"
            height="19"
            fill="white"
            transform="translate(0 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
