{
  "extends": "eslint:recommended",
  "env": {
    "es6": true
  },
  "rules": {
    "comma-dangle": 1,
    "no-cond-assign": [2, "always"],
    "no-console": 1,
    "no-debugger": 1,
    "no-empty": 1,
    "no-ex-assign": 0,
    "no-extra-semi": 1,
    "no-func-assign": 2,
    "valid-jsdoc": 2,
    "no-unexpected-multiline": 2,

    "block-scoped-var": 2,
    "curly" : 1,
    "default-case": 0,
    "dot-notation": 1,
    "guard-for-in": 2,
    "no-alert": 1,
    "no-div-regex": 2,
    "no-eq-null": 2,
    "no-multi-spaces": 1,
    "no-self-compare": 2,
    "no-warning-comments": 1,
    "wrap-iife": 2,
    "yoda": [1, "never"],

    "strict": [2, "global"],

    "no-catch-shadow": 0,
    "no-undefined": 2,

    "handle-callback-err": 2,
    "no-mixed-requires": 1,
    "no-new-require": 2,

    "array-bracket-spacing": 1,
    "comma-spacing": [1, { "before": false, "after": true }],
    "computed-property-spacing": [1, "never"],
    "consistent-this": [2, "self"],
    "eol-last": 1,
    "func-style": [1, "expression"],
    "indent": [2, 2, { "SwitchCase": 1, "VariableDeclarator": { "var": 2, "let": 2, "const": 3 }}],
    "key-spacing": [1, {
      "beforeColon": false,
      "afterColon": true,
      "align": "value"
    }],
    "linebreak-style": [2, "unix"],
    "new-cap": 1,
    "new-parens": 1,
    "newline-after-var": 1,
    "no-lonely-if": 2,
    "no-multiple-empty-lines": [ 2, { "max": 1 } ],
    "no-nested-ternary": 2,
    "no-spaced-func": 1,
    "no-underscore-dangle": 0,
    "no-unneeded-ternary": 2,
    "object-curly-spacing": [ 1, "always", {
      "objectsInObjects": false,
      "arraysInObjects": false
    }],
    "one-var": [ 2, "always" ],
    "operator-linebreak": [ 1, "before" ],
    "padded-blocks": [ 1, "never" ],
    "quote-props": [ 2, "as-needed" ],
    "quotes": [ 1, "double" ],
    "space-after-keywords": [ 1, "always" ],
    "space-before-blocks": [ 1, "always" ],
    "space-before-function-paren": [ 1, "never" ],
    "space-in-parens": [ 1, "never" ],
    "space-return-throw-case": 2,
    "spaced-comment": [ 1, "always" ],
    "wrap-regex": 2,

    "constructor-super": 2,
    "generator-star-spacing": [ 2, { "before": false, "after": true }],
    "no-this-before-super": 2,
    "object-shorthand": [2, "never"],
    "prefer-const": 2,

    "no-bitwise": 2,
    "semi": [2, "always"],

    "camelcase": 0
  }
}