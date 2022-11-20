export interface IDetailedPokeAPIResponsePokemonSingle {
  flavor_text_entries: {
    flavor_text: string;
    language: { name: string };
    version: { name: string };
  }[];
  names: {
    language: {
      name: string;
    };
    name: string;
  }[];
  genera: {
    language: {
      name: string;
    };
    genus: string;
  }[];
  id: number;
}

export interface IMergedPokemon {
  pokedexID: number;
  language: {
    languageISO: string;
    languagePretty?: string;
  };
  languageISO: string;
  languagePretty?: string;
  name: string;
  genus: string;
  flavorText: string;
  artworkUrl: string;
}
