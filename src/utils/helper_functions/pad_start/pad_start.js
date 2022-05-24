export default function padStart({ value, desiredLength, padCharacter }) {
  return value.toString().padStart(desiredLength, padCharacter);
}
