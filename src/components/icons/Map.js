import React from 'react';
import Svg, { Path, Rect, ClipPath, Defs, G } from 'react-native-svg';

export const Map = ({ backgroundColor = "white", strokeColor = "white" }) => (
    <Svg width={26} height={19} viewBox="0 0 26 19" fill="none">
        <Defs>
            <ClipPath id="clip0">
                <Rect width={26} height={19} fill="white" />
            </ClipPath>
        </Defs>
        <G clipPath="url(#clip0)">
            <Path
                d="M25.535 2.8435V17.8738C25.535 17.9695 25.5139 18.064 25.4732 18.1505C25.4324 18.2369 25.3731 18.3132 25.2995 18.3737C25.2259 18.4342 25.1399 18.4775 25.0477 18.5004C24.9554 18.5233 24.8593 18.5253 24.7662 18.5061L18.396 17.176V0.738937L25.0355 2.21119C25.1766 2.24583 25.3022 2.32676 25.3926 2.44123C25.4831 2.5557 25.5331 2.69722 25.535 2.8435Z"
                stroke={strokeColor}
                strokeMiterlimit={10}
                strokeLinejoin="round"
            />
            <Path
                d="M9.39819 2.05779V18.4051L16.5372 16.9085V0.467682L9.39819 2.05779Z"
                stroke={strokeColor}
                strokeMiterlimit={10}
                strokeLinejoin="round"
            />
            <Path
                d="M7.6034 2.18594V18.5333L0.976874 17.1517C0.83252 17.1213 0.702903 17.042 0.609628 16.9269C0.516352 16.8118 0.465061 16.668 0.464355 16.5194V1.41052C0.464637 1.31368 0.486444 1.21814 0.528137 1.13088C0.56983 1.04362 0.630356 0.966872 0.705314 0.906245C0.780272 0.845618 0.867768 0.802655 0.961346 0.780504C1.05492 0.758353 1.15222 0.757568 1.24614 0.778221L7.6034 2.18126V2.18594Z"
                stroke={strokeColor}
                strokeMiterlimit={10}
                strokeLinejoin="round"
            />
        </G>

        <G clipPath="url(#clip0)">
            <Path
                d="M24.999 2.36733V17.3439C24.999 17.4392 24.978 17.5334 24.9373 17.6195C24.8967 17.7057 24.8376 17.7817 24.7642 17.842C24.6908 17.9023 24.6051 17.9454 24.5131 17.9682C24.4211 17.991 24.3252 17.993 24.2324 17.9739L17.8804 16.6486V0.270294L24.5009 1.73728C24.6416 1.77179 24.7669 1.85244 24.857 1.9665C24.9472 2.08056 24.9972 2.22157 24.999 2.36733Z"
                fill={backgroundColor}
            />
            <Path d="M8.9082 1.58442V17.8732L16.0269 16.382V0L8.9082 1.58442Z" fill={backgroundColor} />
            <Path
                d="M7.11868 1.71212V18.0009L0.511056 16.6244C0.367114 16.5941 0.237867 16.515 0.144858 16.4003C0.0518482 16.2857 0.000703262 16.1423 0 15.9943V0.93947C0.000281032 0.842976 0.0220254 0.747775 0.0635995 0.660829C0.105174 0.573884 0.165526 0.497408 0.240271 0.436998C0.315015 0.376588 0.402261 0.33378 0.495573 0.311708C0.588885 0.289636 0.685905 0.288854 0.779553 0.309432L7.11868 1.70745V1.71212Z"
                fill={backgroundColor}
            />
        </G>
    </Svg>


);

