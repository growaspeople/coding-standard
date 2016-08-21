"use strict";

modules.export = {
  "extends": "./common.eslintrc.json",

  "env": {
    "node": true,
    "mocha": true
  },
  "globals": {
    "fetch": true
  },
  "rules": {
    "new-cap": [1, {
      "capIsNewExceptions": [
        "STRING",
        "INTEGER"
      ]
    }]
  }
};
