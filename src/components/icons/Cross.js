import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, Defs, G } from 'react-native-svg';
import { colors } from '../../assets/styles/constants/colors';

export const Cross = ({ backgroundColor = colors.white }) => (
    <View>
        <Svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                d="M1.91421 1.5L15.5 15.0858"
            />
            <Path
                stroke="#fff"
                strokeWidth={2}
                strokeLinecap="round"
                d="M1.5 15.0858L15.0858 1.5"
            />
        </Svg>
    </View>
);

