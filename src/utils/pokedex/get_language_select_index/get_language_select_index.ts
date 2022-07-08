import { createUrlPathFromArray } from "../../create_url_from_path_array/create_url_path_from_array";

interface GetLanguageSelectIndexArgs {
  allLanguagesISO: string[];
  basePathArray: string[];
  currentPage: number;
}

export default function getLanguageSelectIndex({
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
    const link = createUrlPathFromArray(pagePathArray);
    return { value, label: value, link };
  });
}
