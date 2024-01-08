import React from 'react';
import { View } from 'react-native';
import Svg, { Path, Rect, ClipPath, Defs, G } from 'react-native-svg';

export const Home = ({ backgroundColor, strokeColor }) => (
    <View>
        <Svg width={19} height={20} viewBox="0 0 19 20" fill="none">
            <G clipPath="url(#clip0_389_1844)">
                <Path
                    d="M6.635 18.773V15.716C6.63539 15.5296 6.67252 15.345 6.74426 15.173C6.816 15.0009 6.92094 14.8446 7.05309 14.7131C7.18524 14.5816 7.34201 14.4775 7.51444 14.4066C7.68686 14.3357 7.87157 14.2995 8.058 14.3H10.932C11.3091 14.2997 11.6711 14.4485 11.939 14.714C12.0711 14.8449 12.176 15.0006 12.2475 15.1723C12.3191 15.3439 12.356 15.528 12.356 15.714V18.772C12.3549 18.9329 12.3858 19.0924 12.4469 19.2413C12.508 19.3901 12.5981 19.5253 12.712 19.639C12.8264 19.7533 12.9622 19.8439 13.1117 19.9057C13.2611 19.9674 13.4213 19.9991 13.583 19.999H15.544C16.4585 20.0016 17.3368 19.6421 17.987 18.999C18.3074 18.6824 18.5619 18.3054 18.7357 17.8898C18.9096 17.4743 18.9994 17.0284 19 16.578V7.86699C18.9988 7.50362 18.9175 7.14499 18.762 6.81659C18.6064 6.4882 18.3804 6.19812 18.1 5.96699L11.434 0.675994C10.8702 0.226848 10.1675 -0.0117703 9.44673 0.00118794C8.726 0.0141462 8.03231 0.277871 7.485 0.746994L0.967 5.96499C0.674108 6.18978 0.435241 6.47727 0.267915 6.80639C0.100589 7.1355 0.00904619 7.4979 0 7.86699L0 16.567C0.00144207 17.0194 0.0919856 17.467 0.266459 17.8844C0.440933 18.3017 0.695918 18.6806 1.01685 18.9994C1.33778 19.3182 1.71838 19.5707 2.13689 19.7423C2.55541 19.914 3.00364 20.0016 3.456 20H5.372C5.69711 20.0013 6.00954 19.874 6.24111 19.6458C6.47268 19.4176 6.60457 19.1071 6.608 18.782L6.635 18.773Z"
                    fill={backgroundColor}
                    clipPath="url(#clip0_389_1844)"
                />
                <Path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.859 13.291C11.3947 13.2908 11.9086 13.5029 12.288 13.8811C12.6674 14.2592 12.8814 14.7724 12.883 15.308V18.169C12.8835 18.2845 12.9296 18.3951 13.0113 18.4767C13.0929 18.5584 13.2035 18.6045 13.319 18.605H15.086C15.752 18.6074 16.3917 18.3456 16.8649 17.8769C17.3381 17.4082 17.606 16.771 17.61 16.105V7.99202C17.6059 7.7556 17.5481 7.52321 17.4411 7.31239C17.334 7.10157 17.1805 6.91782 16.992 6.77502L10.881 1.88502C10.485 1.56799 9.99279 1.39525 9.4855 1.39525C8.97821 1.39525 8.48603 1.56799 8.09 1.88502L2.021 6.77302C1.82771 6.91627 1.67018 7.1023 1.56071 7.31654C1.45125 7.53079 1.39282 7.76745 1.39 8.00802V16.108C1.39397 16.774 1.66193 17.4112 2.1351 17.8799C2.60827 18.3486 3.24801 18.6104 3.914 18.608H5.7C5.81927 18.6091 5.93411 18.5629 6.01938 18.4795C6.10465 18.3961 6.15342 18.2823 6.155 18.163C6.15406 18.1083 6.15909 18.0536 6.17 18V15.308C6.17235 14.775 6.38465 14.2644 6.76089 13.8868C7.13714 13.5093 7.647 13.2952 8.18 13.291H10.859ZM15.086 20H13.3C12.8179 19.9953 12.3572 19.8001 12.0183 19.4572C11.6795 19.1142 11.4899 18.6512 11.491 18.169V15.308C11.4892 15.1415 11.4214 14.9826 11.3025 14.866C11.1837 14.7494 11.0235 14.6847 10.857 14.686H8.185C8.02008 14.6871 7.86216 14.7528 7.74526 14.8692C7.62836 14.9855 7.56183 15.1431 7.56 15.308V18.16C7.56039 18.2278 7.55062 18.2952 7.531 18.36C7.48041 18.8105 7.26583 19.2266 6.92816 19.5291C6.59048 19.8315 6.15332 19.9992 5.7 20H3.914C2.87882 20.0013 1.88539 19.592 1.15163 18.8618C0.417868 18.1316 0.00370661 17.1402 0 16.105L0 8.00002C0.0025773 7.54854 0.109206 7.10373 0.311601 6.70016C0.513996 6.29658 0.80671 5.9451 1.167 5.67302L7.224 0.800017C7.86558 0.285779 8.66327 0.0055542 9.4855 0.0055542C10.3077 0.0055542 11.1054 0.285779 11.747 0.800017L17.847 5.68302C18.2008 5.9538 18.4885 6.30147 18.6882 6.69975C18.888 7.09802 18.9946 7.53649 19 7.98202V16.106C18.996 17.141 18.5818 18.1322 17.848 18.8622C17.1143 19.5922 16.121 20.0013 15.086 20Z"
                    fill={strokeColor}
                />
                {/* } */}
            </G>
            <Defs>
                <ClipPath id="clip0_389_1844">
                    <Rect width={19} height={20} fill={backgroundColor} />
                </ClipPath>
            </Defs>
        </Svg>
    </View>
);
