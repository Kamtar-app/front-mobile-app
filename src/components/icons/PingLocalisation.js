import { Path, Svg } from "react-native-svg";

export const PingLocalisation = ({ color }) => {
    return (
        <Svg width={10} height={11} viewBox="0 0 10 11" fill="none">
        <Path
          d="M5.00006 0.517502C3.89753 0.518715 2.84051 0.9572 2.06087 1.73676C1.28122 2.51633 0.842632 3.57331 0.841309 4.67584C0.841309 5.74667 1.67048 7.4225 3.30589 9.65667C3.50058 9.92339 3.7555 10.1404 4.04989 10.29C4.34429 10.4395 4.66984 10.5175 5.00006 10.5175C5.33028 10.5175 5.65583 10.4395 5.95022 10.29C6.24462 10.1404 6.49953 9.92339 6.69423 9.65667C8.32964 7.4225 9.15881 5.74667 9.15881 4.67584C9.15749 3.57331 8.71889 2.51633 7.93925 1.73676C7.15961 0.9572 6.10258 0.518715 5.00006 0.517502ZM5.00006 6.33333C4.67042 6.33333 4.34819 6.23559 4.07411 6.05245C3.80003 5.86932 3.58641 5.60902 3.46026 5.30447C3.33411 4.99993 3.30111 4.66482 3.36542 4.34152C3.42973 4.01822 3.58846 3.72124 3.82155 3.48816C4.05463 3.25507 4.35161 3.09633 4.67491 3.03203C4.99821 2.96772 5.33332 3.00072 5.63786 3.12687C5.94241 3.25302 6.20271 3.46664 6.38584 3.74072C6.56898 4.0148 6.66673 4.33703 6.66673 4.66667C6.66673 5.1087 6.49113 5.53262 6.17857 5.84518C5.86601 6.15774 5.44209 6.33333 5.00006 6.33333Z"
          fill={color}
        />
      </Svg>
    );
  };
  