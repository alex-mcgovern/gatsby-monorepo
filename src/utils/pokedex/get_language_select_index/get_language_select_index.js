import { createUrlPathFromArray } from "../../../../utils/create_url_path_from_array";

export default function getLanguageSelectIndex({ allLanguagesISO, basePath }) {
  return allLanguagesISO.map((language) => {
    const value = language.toUpperCase();
    const link = createUrlPathFromArray([language, basePath]);
    return { value, link };
  });
}
