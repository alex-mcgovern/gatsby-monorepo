type Item = {
  value: string;
} | null;

export default function getSelectIndexItemValue(item: Item): string {
  return item ? item.value : "";
}
