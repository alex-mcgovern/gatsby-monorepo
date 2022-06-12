import { recipe } from "@vanilla-extract/recipes";
import { getFunctionalClassNames } from "../../../styles/functional_classnames.css";

export const getBoxClassNames = recipe({
  base: [],

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
          mobile: "spacing8",
        },
        paddingX: {
          mobile: "spacing7",
        },
      }),
      md: getFunctionalClassNames({
        paddingY: {
          mobile: "spacing9",
        },
        paddingX: {
          mobile: "spacing7",
        },
      }),
      lg: getFunctionalClassNames({
        paddingY: {
          mobile: "spacing10",
        },
        paddingX: {
          mobile: "spacing8",
        },
      }),
    },
    margin: {
      xs: getFunctionalClassNames({
        marginY: {
          mobile: "spacing6",
        },
      }),
      sm: getFunctionalClassNames({
        marginY: {
          mobile: "spacing8",
        },
      }),
      md: getFunctionalClassNames({
        marginY: {
          mobile: "spacing10",
        },
      }),
      lg: getFunctionalClassNames({
        marginY: {
          mobile: "spacing12",
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
