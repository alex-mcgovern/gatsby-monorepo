interface IPadStart {
  value: string | number;
  desiredLength: number;
  padCharacter: string;
}

export default function padStart({
  value,
  desiredLength,
  padCharacter,
}: IPadStart) {
  return value.toString().padStart(desiredLength, padCharacter);
}
