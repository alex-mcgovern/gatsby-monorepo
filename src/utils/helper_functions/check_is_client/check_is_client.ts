export function checkIsClient(): boolean {
  return typeof window === "object";
}
