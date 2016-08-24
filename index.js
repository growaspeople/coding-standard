"use strict";

module.exports = {
  extends: "eslint:recommended",

  env: {
    es6: true
  },
  globals: {
    fetch: true
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
    "comma-dangle":            ["error", "only-multiline"],
    "no-cond-assign":          ["error", "always"],
    "no-debugger":             "error",
    "no-extra-semi":           "error",
    "no-func-assign":          "error",
    "no-unexpected-multiline": "error",
    "no-unsafe-finally":       "error",
    "valid-jsdoc":             "error",

    // Best Practices
    "accessor-pairs":        "error",
    "array-callback-return": "error",
    "block-scoped-var":      "error",
    curly:                   "error", // We might have to consider relaxed option
    eqeqeq:                  "error", // shoudn't use "smart" or "allow-null" because no-eq-null is enabled
    "guard-for-in":          "error",
    "no-caller":             "error",
    "no-div-regex":          "error",
    "no-empty-function":     "error", // relaxed config might have to be considered
    "no-eq-null":            "error",
    "no-eval":               "error",
    "no-extend-native":      "error",
    "no-extra-bind":         "error",
    "no-self-compare":       "error",
    "wrap-iife":             "error",
    yoda:                    ["error", "never"],

    // Strict Mode
    strict: ["error", "safe"],

    // variables
    "no-undefined": "error",

    // ECMAScript 6
    "no-var": "error",

    //
    // etc.
    // These rules also affect product quality when violated, but by some reason, they are not configured "error" but "warn".
    // When you add rule in this section, write reason why you add here.
    //

    // Possible Errors

    // Console is sometimes required, even in production
    "no-console": "warn",

    // Need consideration if there is no problem when it is configured as "error"
    "no-extra-parens": "warn",

    // Not so strong reason to force every members to add default section,
    // but it might prevent bugs to be notified when no defauld section.
    "default-case": "warn",

    // I'm not sure if alert, confirm, and prompt are banned. We need discussion
    "no-alert": "warn",

    // It shouldn't so strictly benned, although it is not preferrable
    "no-warning-comments": "warn",

    //
    // Disabled rules
    // These rules are enabled by recommended settings, but disabled in GrowAsPeople.
    //

    // Possible Errors
    "no-ex-assign": "off",

    // Best Practices
    complexity:          "off",
    "consistent-return": "off",
    "dot-location":      "off",
    "no-else-return":    "off", // relse-return is readable in some cases
    "no-extra-label":    "off", // sometimes improve readability

    // Variables
    "no-catch-shadow": "off", // This is for bug in IE8 or earlier. Not required.

    // Node.js and CommonJS
    "no-mixed-requires": "off",

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
