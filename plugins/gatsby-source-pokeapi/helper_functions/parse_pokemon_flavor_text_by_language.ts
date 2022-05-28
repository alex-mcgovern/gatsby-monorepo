interface ParsePokemonFlavorTextByLanguage {
  flavorTextEntries: {
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }[];
  targetLanguageList: string[];
  targetGameVersion: {};
}

interface IValidFlavorText {
  [key: string]: string;
}

export default function parsePokemonFlavorTextByLanguage({
  flavorTextEntries,
  targetLanguageList,
  targetGameVersion,
}: ParsePokemonFlavorTextByLanguage) {
  // empty object to hold result
  const validFlavorText: IValidFlavorText = {};

  // iterate over flavor text in response and pull out
  // only desired game version & language versions
  flavorTextEntries.forEach((flavorTextEntry) => {
    // destructure & clean vars
    const {
      flavor_text: flavorText,
      language: { name: currentFlavorTextLanguage },
      version: { name: currentFlavorTextGameVersion },
    } = flavorTextEntry;

    // match entries by game version & language declared in plugin options
    if (
      targetLanguageList.includes(currentFlavorTextLanguage) &&
      currentFlavorTextGameVersion === targetGameVersion
    ) {
      // remove new lines from flavor text
      const sanitisedFlavorText = flavorText.replace(/\n/g, " ");

      // update object in parent state
      validFlavorText[currentFlavorTextLanguage] = sanitisedFlavorText;
    }
  });

  return validFlavorText;
}
