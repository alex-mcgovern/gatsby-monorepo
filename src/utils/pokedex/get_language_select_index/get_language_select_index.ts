import { createUrlPathFromArray } from "../../create_url_from_path_array/create_url_path_from_array";

interface GetLanguageSelectIndexArgs {
  allLanguagesISO: string[];
  basePath: string;
}

export default function getLanguageSelectIndex({
  allLanguagesISO,
  basePath,
}: GetLanguageSelectIndexArgs) {
  return allLanguagesISO.map((language) => {
    const value = language.toUpperCase();
    const link = createUrlPathFromArray([language, basePath]);
    return { value, label: value, link };
  });
}
