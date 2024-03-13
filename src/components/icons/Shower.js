import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export const Shower = ({ color = "white", size = 35 }) => (
  <Svg
    width={size} 
    height={size * 1.17}
    viewBox="0 0 35 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <G clipPath="url(#clip0_54_2747)" fill={color}>
      <Path d="M.733 41c-.564-.29-.76-.75-.73-1.377.04-.84.006-1.681.011-2.523.004-.684.401-1.11 1.087-1.113 1.909-.013 3.817-.01 5.726-.002.482.002.734.233.728.612-.006.377-.256.582-.75.583-1.695.005-3.39.002-5.085.002h-.487v2.586h32.541v-2.586H10.168c-.16 0-.321.001-.48-.014-.326-.03-.517-.227-.537-.542-.022-.338.16-.558.5-.614.17-.028.345-.03.518-.03h17.065v-9.219c-.27 0-.532.007-.794-.001-.608-.02-1.031-.43-1.034-1.041a641.24 641.24 0 010-6.046c.002-.63.421-1.048 1.05-1.078.25-.012.5-.002.776-.002V1.224H14.046V2.41c.956.17 1.791.59 2.453 1.31.65.708 1.007 1.557 1.098 2.518.142.01.247.014.352.023.595.048.993.435 1.02 1.03.021.466.02.934.002 1.4-.024.633-.438 1.052-1.075 1.054-2.99.01-5.98.01-8.968 0-.634-.003-1.04-.438-1.057-1.07-.01-.333-.002-.667-.002-1 0-1.05.27-1.346 1.354-1.443.306-2.089 1.504-3.386 3.6-3.845 0-.431-.003-.845 0-1.257C12.83.405 13.236 0 13.971 0c5.472-.002 10.944-.002 16.416 0 .772 0 1.169.406 1.172 1.19.003.735 0 1.469 0 2.203v25.704c0 .16.01.323-.018.478-.06.331-.267.535-.607.52-.337-.015-.533-.225-.569-.563-.015-.145-.007-.293-.007-.44V1.234h-1.865v34.725h1.865v-.428c0-.988-.003-1.975.002-2.963.002-.468.235-.732.614-.722.36.009.58.268.584.717.006 1.12.002 2.237.002 3.418h1.65c.267 0 .534-.012.8.01.573.046.97.442.982 1.018.018.987.006 1.975.005 2.962 0 .504-.337.779-.71 1.028H.734zM10.48 6.221c.053.017.078.031.103.031.653.003 1.307.004 1.96.006.146 0 .293-.008.44.005.38.035.63.277.63.599.002.337-.265.59-.666.593-1.147.008-2.294.003-3.441.005-.14 0-.28.012-.41.018v1.04h8.655V7.458c-.62 0-1.215.009-1.81-.003-.379-.008-.627-.253-.631-.583-.005-.314.221-.557.575-.604.155-.02.312-.02.468-.03-.07-1.456-1.385-2.648-2.91-2.666-1.526-.018-2.832 1.143-2.961 2.65h-.002zm16.145 19.311h.596V19.82h-.596v5.714z" />
      <Path d="M7.532 24.544c0 .147.017.295-.003.439-.05.337-.267.532-.596.53a.547.547 0 01-.571-.51 4.48 4.48 0 01-.012-.836c.023-.354.268-.59.582-.595.328-.007.578.242.607.614.01.119.001.24.001.358h-.008zM7.529 11.934c0 .146.02.296-.004.437-.054.315-.26.502-.576.508-.317.005-.542-.181-.583-.494-.04-.3-.042-.613-.007-.915.036-.33.251-.528.596-.52.343.008.535.212.578.546.018.143.003.291.003.438h-.007zM7.538 18.255c.002.65-.185.946-.595.948-.411.002-.604-.299-.604-.944 0-.133-.007-.267.004-.399.033-.37.286-.614.615-.603.317.01.548.245.578.599.01.132.002.266.002.4zM12.825 11.889c0-.12-.009-.24.002-.36.032-.353.262-.58.586-.582.322-.003.569.218.6.57.023.237.019.478.007.717-.02.397-.275.659-.613.65-.341-.008-.567-.268-.584-.676-.004-.107 0-.213 0-.32h.003zM20.513 24.573c-.01.145-.001.294-.031.436-.07.328-.285.523-.62.5-.33-.023-.534-.228-.552-.572a7.375 7.375 0 010-.759c.017-.358.245-.59.566-.604.306-.013.57.218.617.56.019.144.003.292.003.439h.017zM19.312 11.906c0-.147-.016-.295.003-.439.04-.299.216-.482.52-.512.322-.031.566.115.622.43.054.31.055.635.028.95-.03.343-.32.582-.623.544-.351-.043-.544-.254-.557-.614-.004-.12 0-.24 0-.36h.007zM9.152 15.289c0 .119.007.24-.002.359-.026.353-.254.601-.568.6-.34-.003-.56-.188-.6-.52a3.855 3.855 0 01-.007-.874c.04-.36.295-.562.624-.534.365.032.536.256.553.61.006.119 0 .24 0 .359zM11.215 15.255c0-.132-.012-.266.002-.398.034-.32.215-.513.538-.535.343-.024.577.151.616.488a4.12 4.12 0 01-.003.95c-.036.32-.268.495-.584.484-.332-.012-.538-.207-.57-.55-.012-.146-.001-.292-.001-.439h.002zM15.63 15.33c.003.636-.196.936-.61.922-.402-.014-.587-.302-.585-.92 0-.173-.01-.35.024-.516.066-.326.272-.518.619-.493.344.024.521.234.55.57.014.145.002.291.002.438v-.001zM12.828 18.211c0-.133-.013-.268.003-.398.04-.336.24-.54.576-.55.338-.008.555.194.599.524.035.262.027.531.012.796-.022.37-.282.624-.604.62-.327-.004-.565-.257-.589-.633-.008-.12 0-.24 0-.359h.004zM15.63 21.601c0 .133.01.267-.002.398-.03.342-.232.546-.563.564-.337.018-.563-.183-.606-.513a3.798 3.798 0 01-.008-.873c.035-.355.294-.559.621-.54.326.017.535.24.559.606.008.12 0 .239 0 .359h-.002v-.001zM12.828 24.53c0-.134-.012-.267.002-.399.038-.339.244-.542.576-.55.333-.01.557.19.6.523.033.262.028.532.012.797-.022.369-.283.624-.603.62-.325-.004-.564-.257-.59-.631-.008-.12 0-.24 0-.36h.004zM17.25 18.247c0 .107.006.213 0 .32-.027.38-.256.642-.58.63-.356-.013-.57-.22-.6-.572a4.465 4.465 0 01.009-.834c.035-.338.252-.522.59-.53.323-.008.546.226.577.587.011.131.002.266.002.398h.003v.001zM15.632 28.008c0 .119.008.24-.002.359-.027.354-.254.592-.57.605-.301.013-.576-.224-.613-.565a4.33 4.33 0 01-.007-.757c.026-.383.268-.621.598-.62.35 0 .576.248.595.659.005.106 0 .212 0 .319h-.002zM14.012 31.43c0 .146.02.295-.004.437-.057.33-.265.531-.602.522-.336-.009-.543-.212-.573-.55a5.627 5.627 0 01-.006-.757c.018-.375.265-.63.59-.633.32-.003.572.252.604.622.01.119.002.24.002.36h-.01l-.001-.001zM17.252 31.455c0 .08.003.16 0 .24-.018.445-.235.701-.593.7-.356 0-.585-.257-.603-.7-.01-.238-.006-.48.024-.716.042-.34.268-.531.598-.52.328.013.54.21.563.558.01.146.002.292.002.439h.01v-.001zM10.785 18.275c-.01.13-.01.29-.036.447-.052.307-.269.465-.556.47-.29.007-.532-.143-.571-.448a4.705 4.705 0 01-.018-.951c.024-.343.25-.532.586-.528.335.004.54.2.573.543.015.145.015.292.023.467zM19.304 18.192c0-.08-.003-.16 0-.24.013-.435.242-.7.6-.696.338.003.577.264.598.668.01.213.013.427-.002.638-.028.393-.294.655-.628.638-.331-.017-.549-.265-.567-.65-.006-.12 0-.24 0-.359v.001zM9.152 21.608c0 .12.007.24-.002.359-.026.352-.257.606-.57.6-.336-.004-.559-.19-.599-.523a3.914 3.914 0 01-.006-.873c.04-.358.298-.563.626-.533.364.034.537.256.55.61.006.12 0 .24 0 .36zM17.251 24.573c0 .093.004.186 0 .278-.022.41-.25.666-.59.667-.315 0-.569-.247-.6-.623a4.064 4.064 0 01.01-.756c.04-.352.298-.576.606-.565.318.01.54.24.57.6.01.133.001.266.001.399h.004zM9.149 27.998c0 .133.008.266-.001.398-.024.345-.228.548-.556.568-.333.02-.565-.174-.608-.508a3.854 3.854 0 01-.01-.874c.035-.356.295-.563.616-.548.326.015.535.238.56.605.009.119.002.238.002.359h-.003zM11.208 27.98c0-.107-.006-.213 0-.32.024-.387.242-.63.58-.625.364.006.57.216.601.564.025.276.022.559-.008.835-.037.335-.257.522-.59.535-.31.012-.55-.243-.58-.591-.01-.133-.001-.266-.001-.398h-.003zM17.692 28c0-.133-.009-.266.002-.399.025-.342.216-.535.555-.565.323-.028.576.186.614.544.029.276.029.559 0 .835-.035.346-.311.59-.612.554-.349-.042-.546-.25-.563-.61-.005-.12 0-.24 0-.36h.005-.002zM10.784 31.445c-.008.135-.01.282-.027.427-.039.328-.244.506-.557.516-.311.01-.553-.15-.587-.477a5.103 5.103 0 01-.005-.95c.028-.329.264-.503.57-.501.329.002.545.192.581.538.015.146.016.292.024.449l.002-.002zM17.673 15.27c.012-.171-.034-.386.05-.506.131-.183.334-.376.54-.428.285-.071.532.118.572.42.043.325.045.662.014.989-.032.342-.276.518-.609.498-.31-.019-.512-.208-.542-.534-.013-.145-.002-.292-.002-.438h-.023zM17.26 11.906c-.009.16-.006.32-.028.477-.043.307-.246.476-.538.495-.294.019-.539-.127-.587-.428a4.127 4.127 0 01-.033-.95c.026-.35.24-.562.608-.547.365.015.545.238.565.594.007.119.001.238.001.359h.012zM18.894 21.627c-.013.136-.016.31-.05.478a.536.536 0 01-.568.46c-.31-.004-.537-.177-.57-.503a5.526 5.526 0 01-.008-.874c.02-.343.224-.538.564-.549.342-.01.547.177.598.515.022.143.022.29.035.472v.001zM10.787 11.967c-.01.617-.196.907-.592.918-.413.01-.618-.296-.617-.93 0-.172.003-.345.029-.515.05-.324.259-.49.579-.487.32.002.523.173.568.498.024.17.022.344.032.516h.001zM11.199 21.583c.008-.16 0-.321.028-.476.052-.281.236-.444.52-.466.3-.024.55.103.6.402.054.335.057.687.023 1.026-.034.337-.282.522-.614.494-.327-.027-.526-.236-.543-.58-.007-.133-.001-.267-.001-.4H11.199zM10.786 24.576c-.01.14-.009.314-.042.483-.06.305-.295.493-.567.44-.206-.042-.48-.24-.536-.424-.093-.304-.058-.656-.033-.984.026-.347.274-.521.6-.51.309.013.518.194.552.524.015.146.017.291.027.47z" />
    </G>
    <Defs>
      <ClipPath id="clip0_54_2747">
        <Path fill={color} d="M0 0H35V40.9995H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
