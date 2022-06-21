import React from "react";
import WaveBottom from "../../../images/svg/waves/wave_bottom.svg";
import WaveTop from "../../../images/svg/waves/wave_top.svg";
import { TFunctionalClassNames } from "../../../styles/functional_classnames.css";
import Box from "../box/box";

interface IWave {
  color: TFunctionalClassNames["color"];
  waveVariant: "top" | "bottom";
}

export default function Wave({ color, waveVariant }: IWave) {
  const WaveSVG = waveVariant === "top" ? WaveTop : WaveBottom;
  return (
    <Box color={color}>
      <WaveSVG />
    </Box>
  );
}
