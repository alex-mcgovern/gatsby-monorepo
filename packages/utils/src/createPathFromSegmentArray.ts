export function createPathFromSegmentArray(
  array: Array<string | number | undefined>
): string {
  const sanitisedArray = array.filter(Boolean).map((arrayItem) => {
    return arrayItem?.toString().replace(/^\/|\/$/g, "");
  });

  return `/${sanitisedArray.join("/")}`;
}
