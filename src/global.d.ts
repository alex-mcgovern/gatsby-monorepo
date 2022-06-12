module "*.svg" {
  const content: any;
  export default content;
}

type TSizeProp =
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

interface IDownshiftItem {
  label: string;
  value: string;
  link?: string;
}
