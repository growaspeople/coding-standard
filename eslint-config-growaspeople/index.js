"use strict";

module.exports = {
  extends: "eslint:recommended",
  env: {
    es6: true
  },
  rules: {
    "comma-dangle": "warn",
    "no-cond-assign": ["error", "always"],
    "no-console": "warn",
    "no-debugger": "warn",
    "no-empty": "warn",
    "no-ex-assign": "off",
    "no-extra-semi": "warn",
    "no-func-assign": "error",
    "valid-jsdoc": "error",
    "no-unexpected-multiline": "error",

    "block-scoped-var": "error",
    curly : "warn",
    "default-case": "off",
    "dot-notation": "warn",
    "guard-for-in": "error",
    "no-alert": "warn",
    "no-div-regex": "error",
    "no-eq-null": "error",
    "no-multi-spaces": "warn",
    "no-self-compare": "error",
    "no-warning-comments": "warn",
    "wrap-iife": "error",
    yoda: ["warn", "never"],

    strict: ["error", "global"],

    "no-catch-shadow": "off",
    "no-undefined": "error",

    "handle-callback-err": "error",
    "no-mixed-requires": "warn",
    "no-new-require": "error",

    "array-bracket-spacing": "warn",
    "comma-spacing": ["warn", { before: false, after: true }],
    "computed-property-spacing": ["warn", "never"],
    "consistent-this": ["error", "self"],
    "eol-last": "warn",
    "func-style": ["warn", "expression"],
    indent: ["error", 2, { SwitchCase: 1, VariableDeclarator: { var: 2, let: 2, const: 3 }}],
    "key-spacing": ["warn", {
      beforeColon: false,
      afterColon: true,
      align: "value"
    }],
    "linebreak-style": ["error", "unix"],
    "new-cap": "warn",
    "new-parens": "warn",
    "newline-after-var": "warn",
    "no-lonely-if": "error",
    "no-multiple-empty-lines": [ "error", { max: 1 } ],
    "no-nested-ternary": "error",
    "no-spaced-func": "warn",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "object-curly-spacing": [ "warn", "always", {
      objectsInObjects: false,
      arraysInObjects: false
    }],
    "one-var": [ "error", "always" ],
    "operator-linebreak": [ "warn", "before" ],
    "padded-blocks": [ "warn", "never" ],
    "quote-props": [ "error", "as-needed" ],
    quotes: [ "warn", "double" ],
    "space-after-keywords": [ "warn", "always" ],
    "space-before-blocks": [ "warn", "always" ],
    "space-before-function-paren": [ "warn", "never" ],
    "space-in-parens": [ "warn", "never" ],
    "space-return-throw-case": "error",
    "spaced-comment": [ "warn", "always" ],
    "wrap-regex": "error",

    "constructor-super": "error",
    "generator-star-spacing": [ "error", { before: false, after: true }],
    "no-this-before-super": "error",
    "object-shorthand": ["error", "never"],
    "prefer-const": "error",

    "no-bitwise": "error",
    semi: ["error", "always"],

    camelcase: "off"
  }
};
