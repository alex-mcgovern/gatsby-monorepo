const { PLUGIN_NAME } = require("../constants");

class PropertyRequiredError extends Error {
  constructor({ message, error }) {
    super(message, { cause: error });
    this.name = "PropertyRequiredError";
    this.name = `${PLUGIN_NAME} Property required error`;
  }
}

module.exports = {
  PropertyRequiredError,
};
