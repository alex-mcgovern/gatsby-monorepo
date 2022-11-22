interface GetPaginationArrayParams {
  pageCount: number;
  currentPage: number;
}

export function getPaginationArray({
  pageCount,
  currentPage,
}: GetPaginationArrayParams) {
  let lowerBoundary = 1;
  let upperBoundary = currentPage + 2;

  // Create array from pageCount, add 1 to each item to offset 0 index
  const array = Array(pageCount)
    .fill(1)
    .map((_, index) => {
      return index + 1;
    });

  // Show 5 pagination buttons at most
  if (pageCount <= 5) {
    return array;
  }

  if (currentPage - 3 > 1) {
    lowerBoundary = currentPage - 3;
  }

  if (currentPage > pageCount - 3) {
    lowerBoundary = pageCount - 5;
  }

  if (currentPage + 2 >= pageCount) {
    upperBoundary = pageCount;
  }

  if (currentPage >= 5) {
    return array.slice(lowerBoundary, upperBoundary);
  }

  return array.slice(0, 5);
}
