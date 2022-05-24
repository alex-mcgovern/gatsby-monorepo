const { PLUGIN_NAME } = require("../constants");

class PokeAPIFetchError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = `${PLUGIN_NAME} PokeAPI Fetch Error`;
    // eslint-disable-next-line no-console
    console.error(cause);
  }
}

module.exports = {
  PokeAPIFetchError,
};
