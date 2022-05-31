import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const getBoxClassNames = recipe({
  base: [
    {
      position: "relative",
    },
    getFunctionalClassNames({
      color: {
        lightMode: "navy",
        darkMode: "navy",
      },
    }),
  ],

  variants: {
    outline: {
      solid: [
        getFunctionalClassNames({
          outline: "1px solid",
          outlineColor: {
            lightMode: "gray30",
            darkMode: "gray30",
          },
        }),
      ],
      dashed: [
        getFunctionalClassNames({
          outline: "1px dashed",
          outlineColor: {
            lightMode: "gray30",
            darkMode: "gray30",
          },
        }),
      ],
    },
    background: {
      crosshatch: [
        {
          backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScxMCcgaGVpZ2h0PScxMCc+CiAgPHJlY3Qgd2lkdGg9JzEwJyBoZWlnaHQ9JzEwJyBmaWxsPSd0cmFuc3BhcmVudCcgLz4KICA8cGF0aCBkPSdNLTEsMSBsMiwtMgogICAgICAgICAgIE0wLDEwIGwxMCwtMTAKICAgICAgICAgICBNOSwxMSBsMiwtMicgc3Ryb2tlPScjZGRkZGRkJyBzdHJva2Utd2lkdGg9JzEnIC8+Cjwvc3ZnPg==")`,
          backgroundRepeat: "repeat",
        },
      ],
      solid: [
        getFunctionalClassNames({
          background: {
            lightMode: "gray30",
            darkMode: "gray30",
          },
        }),
      ],
    },

    padding: {
      sm: getFunctionalClassNames({
        paddingY: {
          mobile: 8,
        },
        paddingX: {
          mobile: 7,
        },
      }),
      md: getFunctionalClassNames({
        paddingY: {
          mobile: 9,
        },
        paddingX: {
          mobile: 7,
        },
      }),
      lg: getFunctionalClassNames({
        paddingY: {
          mobile: 10,
        },
        paddingX: {
          mobile: 8,
        },
      }),
    },
    margin: {
      xs: getFunctionalClassNames({
        marginY: {
          mobile: 6,
        },
      }),
      sm: getFunctionalClassNames({
        marginY: {
          mobile: 8,
        },
      }),
      md: getFunctionalClassNames({
        marginY: {
          mobile: 10,
        },
      }),
      lg: getFunctionalClassNames({
        marginY: {
          mobile: 12,
        },
      }),
    },
    display: {
      columnLeft: getFunctionalClassNames({
        display: "flex",
        flexDirection: "column",
      }),
      columnCenter: getFunctionalClassNames({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }),
      rowLeft: {
        display: "flex",
      },
      rowRight: {
        display: "flex",
      },
    },
  },

  defaultVariants: {},
});
