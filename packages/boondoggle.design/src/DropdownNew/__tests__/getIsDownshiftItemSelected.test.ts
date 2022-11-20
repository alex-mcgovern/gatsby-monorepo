import {
  ITEM_TO_FIND_MOCK,
  SELECTED_ITEMS_MOCK,
} from "../__mocks__/downshift_items.mock";
import { getIsDownshiftItemSelected } from "../getIsDownshiftItemSelected";

describe("Get is dropdown item selected", () => {
  test("Downshift items mock none refined", () => {
    expect(
      getIsDownshiftItemSelected({
        selectedItems: [],
        item: ITEM_TO_FIND_MOCK,
      })
    ).toBe(false);
  });
  test("Downshift items mock 1 refined", () => {
    expect(
      getIsDownshiftItemSelected({
        selectedItems: SELECTED_ITEMS_MOCK,
        item: ITEM_TO_FIND_MOCK,
      })
    ).toBe(true);
  });
});
