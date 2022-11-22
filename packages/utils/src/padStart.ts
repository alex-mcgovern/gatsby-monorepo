interface PadStartArgs {
  value: string | number;
  desiredLength: number;
  padCharacter: string;
}

export function padStart({ value, desiredLength, padCharacter }: PadStartArgs) {
  return value.toString().padStart(desiredLength, padCharacter);
}
