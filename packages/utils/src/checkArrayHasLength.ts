export function checkArrayHasLength(
  array?: Array<unknown>
): array is Array<unknown> {
  return Array.isArray(array) && array.length > 0;
}
