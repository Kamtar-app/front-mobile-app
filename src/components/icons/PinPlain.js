import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, Defs, G } from 'react-native-svg';

export const PinPlain = () => (
    <View>
        <Svg
            width={10}
            height={11}
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <G clipPath="url(#clip0_325_3509)">
                <Path
                    d="M5 .518A4.163 4.163 0 00.841 4.676c0 1.07.83 2.747 2.465 4.98a2.098 2.098 0 003.388 0C8.33 7.424 9.16 5.747 9.16 4.677A4.163 4.163 0 005 .518zm0 5.815A1.667 1.667 0 115 3a1.667 1.667 0 010 3.333z"
                    fill="#fff"
                />
            </G>
            <Defs>
                <ClipPath id="clip0_325_3509">
                    <Path fill="#fff" transform="translate(0 .5)" d="M0 0H10V10H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    </View>
);

