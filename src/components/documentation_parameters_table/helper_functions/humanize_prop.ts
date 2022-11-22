const RE_OBJECTOF =
  /(?:React\.)?(?:PropTypes\.)?objectOf\((?:React\.)?(?:PropTypes\.)?(\w+)\)/;

const getTypeStr = (type) => {
  switch (type.name.toLowerCase()) {
    case "instanceof":
      return `Class(${type.value})`;

    case "enum":
      if (type.computed) return type.value;
      return type.value
        ? type.value
            .map((v) => {
              return `${v.value}`;
            })
            .join(" │ ")
        : type.raw;

    case "union":
      return type.value
        ? type.value
            .map((t) => {
              return `${getTypeStr(t)}`;
            })
            .join(" │ ")
        : type.raw;

    case "array":
      return type.raw;

    case "arrayof":
      return `Array<${getTypeStr(type.value)}>`;

    case "custom":
      if (
        type.raw.indexOf("function") !== -1 ||
        type.raw.indexOf("=>") !== -1
      ) {
        return "Custom(Function)";
      }
      if (type.raw.toLowerCase().indexOf("objectof") !== -1) {
        const m = type.raw.match(RE_OBJECTOF);
        if (m && m[1]) return `ObjectOf(${m[1]})`;
        return "ObjectOf";
      }
      return "Custom";

    case "bool":
      return "Boolean";

    case "func":
      return "Function";

    case "shape":
      const shape = type.value;
      const rst = {};

      Object.keys(shape).forEach((key) => {
        rst[key] = getTypeStr(shape[key]);
      });

      return JSON.stringify(rst, null, 2);

    default:
      return type.name;
  }
};

export const humanize = (type) => {
  return getTypeStr(type);
};
