export function createUrlPathFromArray(array: (string | number)[]): string {
  const sanitisedArray = array.filter(Boolean).map((arrayItem) => {
    const sanitisedString = arrayItem;

    // ensure substring doesn't have a leading slash
    if (
      typeof sanitisedString === "string" &&
      sanitisedString.startsWith("/")
    ) {
      return sanitisedString.substring(1);
    }

    // ensure substring doesn't have a trailing slash
    if (typeof sanitisedString === "string" && sanitisedString.endsWith("/")) {
      return sanitisedString.slice(0, -1);
    }

    return sanitisedString;
  });

  return `/${sanitisedArray.join("/")}`;
}