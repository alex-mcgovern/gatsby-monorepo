interface GetPaginationVarsArgs {
  count?: number;
  perPage?: number;
  newIndex?: number;
  currentIndex?: number;
  docsLength?: number;
}

export interface PaginationVarsShape {
  totalNbPages: number;
  canLoadPrevious: boolean;
  canLoadNext: boolean;
  pageNbPrevious: number;
  pageNbCurrent: number;
  indexOfFirstInCursor: number;
  indexOfLastInCursor: number;
}

export const getPaginationVars = ({
  count = 0,
  perPage = 0,
  newIndex = 0,
  currentIndex = 0,
  docsLength = 0,
}: GetPaginationVarsArgs): PaginationVarsShape => {
  const totalNbPages = Math.ceil(count / perPage);

  const canLoadPrevious = newIndex > 0 || false;
  const canLoadNext = newIndex < totalNbPages - 1 || false;

  const indexOfFirstInCursor = newIndex ? newIndex * perPage : 0;
  const indexOfLastInCursor = docsLength
    ? newIndex * perPage + docsLength - 1
    : 0;

  return {
    totalNbPages,
    canLoadPrevious,
    canLoadNext,
    pageNbCurrent: newIndex,
    pageNbPrevious: currentIndex,
    indexOfFirstInCursor,
    indexOfLastInCursor,
  };
};
