const path = require("path");

module.exports = {
  env: {
    browser: true,
    node: true,
  },

  extends: [
    "airbnb",
    "airbnb/hooks",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:mdx/recommended",
    "plugin:react-perf/recommended",
    "prettier",
  ],

  globals: {
    cy: true,
    Cypress: true,
    fs: true,
  },

  ignorePatterns: ["*.snap", "*.svg", "*.md"],

  overrides: [
    /**
     * Allow duplicate strings in tests & css.ts files for
     * better readability, where JS performance is less of an issue.
     */

    {
      env: {
        jest: true,
      },
      files: ["**/*.test.ts", "**/*.test.tsx", "**/*.css.ts"],
      rules: {
        "sonarjs/no-duplicate-string": "off",
      },
    },

    /**
     * Ensure gatsby pages & page templates use default exports.
     */

    {
      files: [
        "gatsby-config.ts",
        "jest.*",
        "**/pages/**/*.tsx",
        "**/templates/**/*.tsx",
      ],
      rules: {
        "import/no-default-export": "off",
        "import/prefer-default-export": "error",
      },
    },
  ],

  parser: "@typescript-eslint/parser",
  parserOptions: {
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
    project: "./tsconfig.json",
    requireConfigFile: true,
  },

  plugins: [
    "react-perf",
    "sonarjs",
    "jsdoc",
    "@typescript-eslint",
    "unused-imports",
  ],

  rules: {
    "import/no-cycle": "error",
    "react/button-has-type": "error",
    "react/jsx-filename-extension": ["error", { extensions: [".tsx"] }],
    "react/jsx-props-no-spreading": "off",

    /**
     * Prevent eslint from complaining about dev dependencies imported in test files
     */

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["*.test.ts", "*.test.tsx"],
        packageDir: ".",
      },
    ],

    /**
     * Allow simpler prop typings for Typescript components.
     * ToDo: Consider generating react prop types at compile time for component library.
     * */

    "react/prop-types": "off",
    "react/require-default-props": "off",

    /**
     * Rules aimed at improving code readability and style consistency.
     */

    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        disallowTypeAnnotations: true,
        prefer: "type-imports",
      },
    ],
    "@typescript-eslint/prefer-optional-chain": "error",
    "arrow-body-style": ["error", "always"],
    "react/destructuring-assignment": [
      "error",
      "always",
      {
        destructureInSignature: "always",
        ignoreClassFields: true,
      },
    ],

    /**
     * Error on patterns that may cause frontend performance degradation.
     */

    "react-perf/jsx-no-jsx-as-prop": "error",
    "react-perf/jsx-no-new-array-as-prop": "error",
    "react-perf/jsx-no-new-function-as-prop": "error",
    "react-perf/jsx-no-new-object-as-prop": "error",

    /**
     * Ensure errant console.log & console.debug's are not left lying about,
     * while allowing log levels used for intentionally logging a result.
     */

    "no-console": [
      "error",
      {
        allow: ["warn", "error", "info"],
      },
    ],

    /**
     * Ensure named exports are used, which helps speed up code refactoring
     * and ensures things are referenced consistently throughout codebase
     */

    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    /**
     * Disable default unused vars/imports rules in favour of unused-imports
     * plugin, which enables fixing these issues on lint via the --fix flag.
     */

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",

    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      {
        args: "after-used",
        argsIgnorePattern: "^_",
        vars: "all",
        varsIgnorePattern: "^_",
      },
    ],
  },

  settings: {
    "import/resolver": {
      "eslint-import-resolver-lerna": {
        packages: path.resolve(__dirname, "packages"),
      },

      alias: {
        map: [
          ["~utils", "./src/utils"],
          ["~hooks", "./src/hooks"],
        ],
      },
      node: {
        extensions: [".ts", ".tsx", ".json"],
      },
    },
  },
};
