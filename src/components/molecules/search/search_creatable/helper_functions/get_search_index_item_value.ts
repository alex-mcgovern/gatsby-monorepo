type Item = {
  value: string;
} | null;

export default function getSearchIndexItemValue(item: Item): string {
  return item ? item.value : "";
}
