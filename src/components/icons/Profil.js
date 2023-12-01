import { Svg, Path } from "react-native-svg";

export const Profil = ({ color, size }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36.935 46.169"
    >
      <Path
        id="Tracé_432"
        data-name="Tracé 432"
        d="M36.935,37.7c0,7.592-10.539,8.472-18.467,8.472q-1.2,0-2.36-.035a1.656,1.656,0,0,1-1.617-1.7A1.7,1.7,0,0,1,16.2,42.822q1.115.031,2.265.03c10.04,0,15.132-1.734,15.132-5.155,0-3.453-5.092-5.205-15.132-5.205S3.336,34.227,3.336,37.651c0,1.12.4,2.742,3.868,3.91A1.657,1.657,0,1,1,6.133,44.7C1.064,42.992,0,39.925,0,37.651c0-7.44,10.113-8.435,17.979-8.473h1.368C24.592,29.205,36.935,29.668,36.935,37.7ZM18.467,0A12.358,12.358,0,1,1,6.03,12.359,12.411,12.411,0,0,1,18.467,0Zm0,3.317a9.041,9.041,0,1,0,9.1,9.042A9.08,9.08,0,0,0,18.467,3.317Z"
        transform="translate(0)"
        fill={color}
      />
    </Svg>
  );
};
