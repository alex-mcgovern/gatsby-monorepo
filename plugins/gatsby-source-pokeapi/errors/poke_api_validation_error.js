const { PLUGIN_NAME } = require("../constants");

class PokeAPIValidationError extends Error {
  constructor(message, cause) {
    super(message);
    this.cause = cause;
    this.name = `${PLUGIN_NAME} PokeAPI Validation Error`;
    // eslint-disable-next-line no-console
    console.error(cause);
  }
}

module.exports = {
  PokeAPIValidationError,
};
