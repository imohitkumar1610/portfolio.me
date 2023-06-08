import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Senior Member at IEEE SB NIT Dgp",
          "MERN Stack Developer",
          "Open Source Contributor",
          "Training and Placement Co-ordinator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
