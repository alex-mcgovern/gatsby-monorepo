const solidColors = {
  "": "#093554",
  /* —
  * COLOR PALETTE                                                           
  * This is intentionally kept flat for ease of mapping to component props 
  // — */

  /* —
  * BRAND COLORS                            
  // — */
  cloud_burst: "#093554",
  cloudBurst: "#093554",
  cloudBurst80: "#365a73",
  cloudBurst50: "#7991a2",
  cloudBurst30: "#a6b6c1",
  cloudBurst10: "#d2dae0",

  darkViolet: "#42448e",
  darkViolet130: "#191d36",
  darkViolet80: "#34195a",
  darkViolet50: "#9899c1",
  darkViolet30: "#c9bdd9",
  darkViolet10: "#ddddea",

  electricViolet: "#7a7fff",
  electricViolet130: "#5559b2",
  electricViolet80: "#6e72e5",
  electricViolet50: "#9296ff",
  electricViolet30: "#b6b9ff",
  electricViolet10: "#e7e8ff",

  azure: "#058ED8",
  azure130: "#036397",
  azure80: "#32a3df",
  azure50: "#77c1ea",
  azure30: "#a4d6f1",
  azure10: "#d2eaf8",
  azure5: "#e8f4fb",
  azureAlpha80: "#058ED880",
  azureAlpha50: "#058ED850",
  azureAlpha30: "#058ED830",
  azureAlpha10: "#058ED810",

  sun: "#f7ab1b",
  sun80: "#f8ba44",
  sun50: "#fbd183",
  sun30: "#fce0ac",
  sun10: "#fef0d6",

  burntSun: "#f38d00",
  burntSun130: "#B05700",
  burntSun80: "#F5A22E",
  burntSun50: "#F8C174",
  burntSun30: "#FBD6A2",
  burntSun10: "#FDEAD1",

  kashmirBlue: "#44689A",

  /*
   * UI COLORS
   */

  white: "#ffffff",
  whiteAlpha80: "#ffffff80",
  whiteAlpha50: "#ffffff50",
  whiteAlpha30: "#ffffff30",
  whiteAlpha10: "#ffffff10",

  lightGray: "#F4F7F9",

  gray: "#AAAAAA",

  lightGray180: "#ADC3D2",
  lightGray150: "#CEDBE4",
  lightGray130: "#EFF3F6",
  lightGray10: "#f7f8f9",

  cyan: "#32CBDF",
  cyan130: "#279EAE",
  cyan80: "#65E9FA",
  cyan50: "#92EFFB",
  cyan30: "#BEF6FD",

  charcoal: "#2d2d2d",
  charcoal80: "#575757",
  charcoal50: "#969696",
  charcoal30: "#c0c0c0",
  charcoal10: "#EAEAEA",

  charcoalAlpha80: "#2d2d2d80",
  charcoalAlpha50: "#2d2d2d50",
  charcoalAlpha30: "#2d2d2d30",
  charcoalAlpha10: "#2d2d2d10",

  green: "#399847",
  red: "#c00023",

  gray130: "#5b646d",
  gray80: "#9ba5b0",
  gray50: "#c1c7ce",
  gray30: "#dadde1",
  gray10: "#f3f4f5",

  semanticGreen: "#399847",
  semanticGreen130: "#286A32",
  semanticGreen10: "#EBF5ED",

  semanticRed: "#c00023",
};

const getBrandGradient = (bottomLeftColor: string, topRightColor: string) => {
  return `linear-gradient(30deg, ${bottomLeftColor} 12.5%, ${topRightColor}  87.5%)`;
};

const gradients = {
  gradientDefault: getBrandGradient(solidColors.darkViolet, solidColors.azure),

  gradientIndustries: getBrandGradient(
    solidColors.electricViolet130,
    solidColors.azure80
  ),
  gradientPayments: getBrandGradient(
    solidColors.electricViolet80,
    solidColors.cyan
  ),
  gradientData: getBrandGradient(
    solidColors.darkViolet,
    solidColors.electricViolet80
  ),

  gradientDevelopers: getBrandGradient(
    solidColors.darkViolet130,
    solidColors.darkViolet
  ),

  gradientPeople: `linear-gradient(180deg, ${solidColors.lightGray10} 0%, ${solidColors.white} 25%,${solidColors.white} 82.5%, ${solidColors.lightGray10} 100%)`,

  gradientVertical: `linear-gradient(180deg, ${solidColors.lightGray10} 0%, ${solidColors.white} 25%, ${solidColors.white} 87.5%, ${solidColors.lightGray10} 100%)`,
  none: "none",
};

export const varsColorPalette = { ...solidColors, ...gradients };
