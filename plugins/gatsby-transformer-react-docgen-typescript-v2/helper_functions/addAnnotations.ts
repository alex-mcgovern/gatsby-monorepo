import { ANNOTATIONS } from "../constants";

interface IAddAnnotations {
  beta: string;
  required: boolean;
  name: string;
  description: string;
  defaultValue: {
    value: string;
  };
  tsType: {
    name: string;
    raw: null;
  };
  type: null;
  [key: string]: any;
}

export default function addAnnotations(prop: IAddAnnotations) {
  if (prop.description) {
    ANNOTATIONS.forEach(({ regex, name }) => {
      const match = prop.description.match(regex);
      if (match) {
        prop.description = prop.description.replace(regex, "").trim();
        prop[name] = match[2] || match[1] || true;
      }
    });
  }

  return prop;
}
