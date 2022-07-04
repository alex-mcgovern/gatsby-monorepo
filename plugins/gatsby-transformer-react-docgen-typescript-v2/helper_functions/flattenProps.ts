export default function flattenProps(props) {
  const res: {}[] = [];
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      value.name = key;
      res.push(value);
    });
  }

  return res;
}
exports.flattenProps = flattenProps;
