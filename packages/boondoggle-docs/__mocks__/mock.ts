export const d = [
  {
    name: "appearance",
    required: false,
    description: {
      text: "Variant prop controlling button appearance.",
    },
    type: {
      value: [
        {
          name: '"primary"',
        },
        {
          name: '"secondary"',
        },
        {
          name: '"tertiary"',
        },
      ],
    },
  },
  {
    name: "display",
    required: false,
    description: {
      text: "Utility-first style prop controlling css display property.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "iconLeading",
    required: false,
    description: {
      text: "FontAwesome icon shown on the left side of button.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "iconTrailing",
    required: false,
    description: {
      text: "FontAwesome icon shown on the right side of button.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "id",
    required: false,
    description: {
      text: "Used as the html ID.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "disabled",
    required: false,
    description: {
      text: "Allow for disabled state when controlled element.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "size",
    required: false,
    description: {
      text: "Variant controlling button size.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "title",
    required: false,
    description: {
      text: "The string shown in the button.",
    },
    type: {
      value: [
        {
          name: "string",
        },
        {
          name: "number",
        },
      ],
    },
  },
  {
    name: "to",
    required: false,
    description: {
      text: "The string URI to link to. Supports relative and absolute URIs.",
    },
    type: {
      value: null,
    },
  },
  {
    name: "type",
    required: false,
    description: {
      text: "Allow overriding html button type attribute.",
    },
    type: {
      value: [
        {
          name: '"submit"',
        },
        {
          name: '"button"',
        },
      ],
    },
  },
  {
    name: "width",
    required: false,
    description: {
      text: "Utility-first style prop controlling css width property.",
    },
    type: {
      value: null,
    },
  },
];
