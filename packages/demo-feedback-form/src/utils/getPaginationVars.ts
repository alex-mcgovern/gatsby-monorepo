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
  previousPage: number;
  currentPage: number;
  firstItemIndex: number;
  lastItemIndex: number;
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

  const firstItemIndex = newIndex ? newIndex * perPage : 0;
  const lastItemIndex = docsLength ? newIndex * perPage + docsLength - 1 : 0;

  return {
    totalNbPages,
    canLoadPrevious,
    canLoadNext,
    currentPage: newIndex,
    previousPage: currentIndex,
    firstItemIndex,
    lastItemIndex,
  };
};
