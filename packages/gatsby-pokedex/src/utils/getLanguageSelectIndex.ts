import { createPathFromSegmentArray } from "@alexmcgovern/utils";

interface GetLanguageSelectIndexArgs {
  allLanguagesISO: string[];
  basePathArray: string[];
  currentPage: number;
}

export function getLanguageSelectIndex({
  allLanguagesISO,
  basePathArray,
  currentPage,
}: GetLanguageSelectIndexArgs) {
  return allLanguagesISO.map((language) => {
    const pagePathArray = [...basePathArray];
    const isEnglish = language === "en";

    if (!isEnglish) {
      pagePathArray.push(language);
    }
    if (currentPage) {
      pagePathArray.push(currentPage.toString());
    }
    const value = language.toUpperCase();
    const link = createPathFromSegmentArray(pagePathArray);
    return { value, label: value, link };
  });
}
