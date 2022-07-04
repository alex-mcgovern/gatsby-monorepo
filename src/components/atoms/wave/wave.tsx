import React from "react";
import WaveBottom from "../../../images/svg/waves/wave_bottom.svg";
import WaveTop from "../../../images/svg/waves/wave_top.svg";
import { TFunctionalClassNames } from "../../../styles/functional_classnames.css";
import { Box } from "../box/box";

export interface IWave {
  color: TFunctionalClassNames["color"];
  waveVariant: "top" | "bottom";
}

export const Wave = ({ color, waveVariant }: IWave) => {
  const WaveSVG = waveVariant === "top" ? WaveTop : WaveBottom;
  return (
    <Box customisation={{ color: color }}>
      <WaveSVG />
    </Box>
  );
};
