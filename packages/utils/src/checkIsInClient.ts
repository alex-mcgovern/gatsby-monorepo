export function checkIsInClient(): boolean {
  return typeof window === "object";
}
