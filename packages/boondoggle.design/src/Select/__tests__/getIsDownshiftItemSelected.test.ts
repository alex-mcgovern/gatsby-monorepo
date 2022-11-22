import {
  ITEM_TO_FIND_MOCK,
  SELECTED_ITEMS_MOCK,
} from "../__mocks__/downshift_items.mock";
import { getIsDropdownItemSelected } from "../getIsDropdownItemSelected";

describe("Get is dropdown item selected", () => {
  test("Downshift items mock none refined", () => {
    expect(
      getIsDropdownItemSelected({
        selectedItems: [],
        item: ITEM_TO_FIND_MOCK,
      })
    ).toBe(false);
  });
  test("Downshift items mock 1 refined", () => {
    expect(
      getIsDropdownItemSelected({
        selectedItems: SELECTED_ITEMS_MOCK,
        item: ITEM_TO_FIND_MOCK,
      })
    ).toBe(true);
  });
});
