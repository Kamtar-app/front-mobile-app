import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, Defs, G } from 'react-native-svg';
import { colors } from '../../assets/styles/constants/colors';

export const Filter = ({ backgroundColor = colors.white, color = "#828282", height = 40, width = 40 }) => (
    <View>
        <Svg
            width={width}
            height={height}
            viewBox={`0 0 ${30} ${30}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <Rect y={0.5} width={30} height={30} rx={15} fill={backgroundColor} />
            <Path
                d="M10.417 11.4h1.14c.09.316.284.595.555.793.271.2.603.307.944.307.34 0 .672-.108.943-.306a1.49 1.49 0 00.556-.794h5.028c.11 0 .217-.042.295-.117A.392.392 0 0020 11a.392.392 0 00-.122-.283.426.426 0 00-.295-.117h-5.028a1.49 1.49 0 00-.556-.793 1.596 1.596 0 00-.943-.307c-.341 0-.673.108-.944.307a1.49 1.49 0 00-.555.793h-1.14a.426.426 0 00-.295.117A.392.392 0 0010 11c0 .106.044.208.122.283a.426.426 0 00.295.117zm2.638-1.1c.145 0 .286.041.405.118.12.077.214.186.27.314a.674.674 0 01-.159.763.758.758 0 01-.795.152.724.724 0 01-.327-.258.68.68 0 01.091-.884.746.746 0 01.515-.205zM19.583 14.6h-1.14a1.489 1.489 0 00-.555-.793 1.595 1.595 0 00-.943-.307c-.341 0-.673.108-.944.307a1.49 1.49 0 00-.555.793h-5.03a.426.426 0 00-.294.117.392.392 0 000 .566.426.426 0 00.295.117h5.029c.09.316.284.595.555.793.271.2.603.307.944.307.34 0 .672-.108.943-.307.27-.198.466-.477.555-.793h1.14c.11 0 .217-.042.295-.117a.392.392 0 000-.566.426.426 0 00-.295-.117zm-2.638 1.1a.751.751 0 01-.405-.118.707.707 0 01-.27-.314.674.674 0 01.159-.763.757.757 0 01.795-.152.724.724 0 01.327.258.68.68 0 01-.091.884.746.746 0 01-.515.205zM19.583 18.6h-5.028a1.49 1.49 0 00-.556-.794 1.596 1.596 0 00-.943-.306c-.341 0-.673.108-.944.306a1.49 1.49 0 00-.555.794h-1.14a.426.426 0 00-.295.117A.392.392 0 0010 19c0 .106.044.208.122.283a.426.426 0 00.295.117h1.14c.09.316.284.595.555.794.271.198.603.306.944.306.34 0 .672-.108.943-.306a1.49 1.49 0 00.556-.794h5.028c.11 0 .217-.042.295-.117A.392.392 0 0020 19a.392.392 0 00-.122-.283.426.426 0 00-.295-.117zm-6.528 1.1a.751.751 0 01-.405-.118.706.706 0 01-.268-.314.674.674 0 01.158-.763.758.758 0 01.795-.152.724.724 0 01.327.258.68.68 0 01-.091.884.747.747 0 01-.516.205z"
                fill={color}
            />
        </Svg>
    </View>
);

