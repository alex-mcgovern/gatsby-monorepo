function parsePokemonFlavorTextByLanguage({
  flavorTextEntries,
  targetLanguageList,
  targetGameVersion,
}) {
  // empty object to hold result
  const validFlavorText = {};

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

module.exports = {
  parsePokemonFlavorTextByLanguage,
};
