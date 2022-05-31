// necessary to make scss module work. See https://github.com/gatsbyjs/gatsby/issues/8144#issuecomment-438206866
declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}

declare module "*.svg" {
  const content: any;
  export default content;
}

export type TSizeProp =
  | "xs"
  | "lg"
  | "sm"
  | "md"
  | "1x"
  | "2x"
  | "3x"
  | "4x"
  | "5x"
  | "6x"
  | "7x"
  | "8x"
  | "9x"
  | "10x";
