const fs = require("fs");
const path = require("path");

const json = fs.readFileSync(
  path.resolve(__dirname, "./structured_types_mock.json")
);
const parsed = JSON.parse(json);

if (Object.keys(parsed) && Object.keys(parsed).length > 0) {
  const transformed = {
    mapIndex: Object.keys(parsed),
    parsed,
  };
  fs.writeFileSync(
    path.resolve(__dirname, "__mocks__/structured_types_mock_output.json"),
    transformed
  );
}
