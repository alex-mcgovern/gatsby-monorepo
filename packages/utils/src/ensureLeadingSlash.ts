export const ensureLeadingSlash = (string?: string) => {
  if (typeof string === "string") {
    return string?.replace(/^\/?/, "/");
  }
  return undefined;
};
