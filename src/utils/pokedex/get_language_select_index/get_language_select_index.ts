import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";

interface IGetLanguageSelectIndex {
  allLanguagesISO: string[];
  basePath: string;
}

export default function getLanguageSelectIndex({
  allLanguagesISO,
  basePath,
}: IGetLanguageSelectIndex) {
  return allLanguagesISO.map((language) => {
    const value = language.toUpperCase();
    const link = createUrlPathFromArray([language, basePath]);
    return { value, link };
  });
}
