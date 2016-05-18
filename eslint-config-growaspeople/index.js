"use strict";

module.exports = {
  extends: "eslint:recommended",

  env: {
    es6: true
  },

  rules: {
    //
    // Necessary rules
    // These configs are necessary and all rules should be configured "error".
    // If these rules are violated, there may be real impact against the product
    // ――it may causes bugs, makes code unreadable, or produce any other issues
    // which reduces quality of the product.
    //

    // Possible Errors
    "comma-dangle":            "warn",
    "no-cond-assign":          ["error", "always"],
    "no-debugger":             "warn",
    "no-extra-semi":           "warn",
    "no-func-assign":          "error",
    "no-unexpected-multiline": "error",
    "valid-jsdoc":             "error",

    // Best Practices
    "block-scoped-var": "error",
    curly:              "warn",
    "guard-for-in":     "error",
    "no-div-regex":     "error",
    "no-eq-null":       "error",
    "no-self-compare":  "error",
    "wrap-iife":        "error",
    yoda:               ["warn", "never"],

    // Strict Mode
    strict: ["error", "global"],

    // variables
    "no-undefined": "error",

    //
    // etc.
    // These rules also affect product quality when violated, but by some reason, they are not configured "error" but "warn".
    // When you add rule in this section, write reason why you add here.
    //
    "no-console":          "warn",
    "default-case":        "off",
    // I'm not sure if alert, confirm, and prompt are banned. We need discussion
    "no-alert":            "warn",
    // It shouldn't so strictly benned, although it is not preferrable
    "no-warning-comments": "warn",

    //
    // Disabled rules
    // These rules are enabled by recommended settings, but disabled in GrowAsPeople.
    //

    // Possible Errors
    "no-ex-assign": "off",

    // Variables
    "no-catch-shadow": "off", // This is for bug in IE8 or earlier. Not required.

    //
    // Stylistic rules
    // Rules just about styles, such as spacing and line breaks. All rules should
    // be configured "warn".
    // There is no real impact against the product even if these rules are violated,
    // but to keep code beauty, it is highly recommended to follow these rules.
    // Rules which heavily make code unreadable should be placed under Necessary rules.
    //

    // Possible Errors
    "no-empty": "warn",

    // Best Practices
    "dot-notation":    "warn",
    "no-multi-spaces": "warn",

    // Stylistic Issues
    "key-spacing": ["warn", {
      beforeColon: false,
      afterColon:  true,
      align:       "value"
    }],
    "object-curly-spacing": ["warn", "always", {
      objectsInObjects: false,
      arraysInObjects:  false
    }],

    //
    // Uncategolized
    // TODO Categolize into above 3 categories
    //
    "handle-callback-err": "error",
    "no-mixed-requires":   "warn",
    "no-new-require":      "error",

    "array-bracket-spacing":       "warn",
    "comma-spacing":               ["warn", { before: false, after: true }],
    "computed-property-spacing":   ["warn", "never"],
    "consistent-this":             ["error", "self"],
    "eol-last":                    "warn",
    "func-style":                  ["warn", "expression"],
    indent:                        ["error", 2, { SwitchCase: 1, VariableDeclarator: { var: 2, let: 2, const: 3 }}],
    "linebreak-style":             ["error", "unix"],
    "new-cap":                     "warn",
    "new-parens":                  "warn",
    "newline-after-var":           "warn",
    "no-lonely-if":                "error",
    "no-multiple-empty-lines":     ["error", { max: 1 }],
    "no-nested-ternary":           "error",
    "no-spaced-func":              "warn",
    "no-underscore-dangle":        "off",
    "no-unneeded-ternary":         "error",
    "one-var":                     ["error", "always"],
    "operator-linebreak":          ["warn", "before"],
    "padded-blocks":               ["warn", "never"],
    "quote-props":                 ["error", "as-needed"],
    quotes:                        ["warn", "double"],
    "keyword-spacing":             ["warn", { before: true, after: true }],
    "space-before-blocks":         ["warn", "always"],
    "space-before-function-paren": ["warn", "never"],
    "space-in-parens":             ["warn", "never"],
    "spaced-comment":              ["warn", "always"],
    "wrap-regex":                  "error",

    "constructor-super":      "error",
    "generator-star-spacing": ["error", { before: false, after: true }],
    "no-this-before-super":   "error",
    "object-shorthand":       ["error", "never"],
    "prefer-const":           "error",

    "no-bitwise": "error",
    semi:         ["error", "always"],

    camelcase: "off"
  }
};
