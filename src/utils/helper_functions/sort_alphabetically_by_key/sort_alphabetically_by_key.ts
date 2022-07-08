interface SortAlphabeticallyByKeyArgs {
  objects: {
    [key: string]: string;
  }[];
  key: string;
}

export default function sortAlphabeticallyByKey({
  objects,
  key,
}: SortAlphabeticallyByKeyArgs) {
  return objects.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}
