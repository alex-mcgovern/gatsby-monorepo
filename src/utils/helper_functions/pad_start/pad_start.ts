interface PadStartArgs {
  value: string | number;
  desiredLength: number;
  padCharacter: string;
}

export default function padStart({
  value,
  desiredLength,
  padCharacter,
}: PadStartArgs) {
  return value.toString().padStart(desiredLength, padCharacter);
}
