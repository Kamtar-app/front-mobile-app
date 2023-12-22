import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const Star = () => (
    <Svg
        width={10}
        height={11}
        viewBox="0 0 10 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <G clipPath="url(#clip0_70_2852)">
            <Path
                d="M.553 5.667L2.036 6.75l-.563 1.745A1.324 1.324 0 001.966 10a1.324 1.324 0 001.584-.008L5 8.925 6.45 9.99a1.344 1.344 0 002.077-1.496L7.964 6.75l1.483-1.083a1.345 1.345 0 00-.791-2.43H6.832L6.28 1.513a1.345 1.345 0 00-2.56 0l-.553 1.724h-1.82a1.345 1.345 0 00-.792 2.43H.553z"
                fill="#F4B742"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_70_2852">
                <Path fill="#fff" transform="translate(0 .5)" d="M0 0H10V10H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

