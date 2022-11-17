type Item = {
  value: string;
} | null;

export default function getDropdownItemsItemValue(item: Item): string {
  return item ? item.value : "";
}
