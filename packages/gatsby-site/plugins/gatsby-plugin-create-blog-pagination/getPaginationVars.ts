import path from "path";

interface GetPaginationVarsArgs {
  index: number;
  itemsPerPage: number;
  basePagePath: string;
}

export function getPaginationVars({
  index,
  itemsPerPage,
  basePagePath,
}: GetPaginationVarsArgs) {
  const currentPage = index + 1;
  const isFirstPage = index === 0;
  const itemsToSkip = index ? itemsPerPage * index : 0;

  const nthPagePath = path.join(basePagePath, currentPage.toString());

  const pagePath = isFirstPage ? basePagePath : nthPagePath;

  return {
    currentPage,
    itemsToSkip,
    pagePath,
  };
}
