/**
 * Mock SVG files as modules, stops Typescript complaining on direct import of SVG
 * into files via react-svg-loader & gatsby-plugin-react-svg.
 */

declare module "*.svg" {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any;
  // eslint-disable-next-line import/no-default-export
  export default content;
}
