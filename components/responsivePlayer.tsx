import React from "react";
import ReactPlayer, { ReactPlayerProps } from "react-player";

const ResponsivePlayer = (props: ReactPlayerProps) => {
  return (
    <div
      style={{
        position: "relative",
        paddingTop: "56.25%" /* Player ratio: 100 / (1280 / 720) */,
      }}
    >
      <ReactPlayer
        {...props}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
        width="100%"
        height="100%"
      />
    </div>
  );
};

// .player-wrapper {
//     position: relative;
//     padding-top: 56.25% /* Player ratio: 100 / (1280 / 720) */
//   }

//   .react-player {
//     position: absolute;
//     top: 0;
//     left: 0;
//   }

export default ResponsivePlayer;
