export const convertKebabCaseToSentenceCase = (slug: string) => {
  return slug
    .replace(/-/g, " ")
    .replace(/\//g, " ")
    .replace(/\b[a-z]/g, (substring) => {
      return substring[0].toUpperCase();
    });
};
