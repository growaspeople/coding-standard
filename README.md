GrowAsPeople Coding Style Standards
====================================

[![Build Status](https://travis-ci.org/growaspeople/coding-standards.svg?branch=master)](https://travis-ci.org/growaspeople/coding-standards)

This repository includes coding style standard documents and configuration files used in GrowAsPeople projects.

See [JavaScript section](https://github.com/growaspeople/coding-standards/tree/master/javascript) for detailed coding rules not included in ESLint configuration.

When you want to add rules, try not to add it into documents but configuration files as possible.
Software engineers' primary common language is not English but programming languages. It is much easier to understand concretely rather than explaining in ambiguous natural language.

Install
------
This repository includes ESLint and EditorConfig configuration files.
You can install this repo using npm or bower.

```shell
npm install --save growaspeople/coding-standards
```

```shell
bower install --save growaspeople/coding-standards
./bower_components/coding-standards/init.sh # You need to run init.sh manually if you install via bower.
```

You can also use plugins for editors, including [Brackets](https://github.com/zaggino/brackets-eslint), [Atom](https://atom.io/packages/linter-eslint)

General Rules
==============

Internal Patches
----------------
As a principle, when you wrote patches for libraries used in our project, it should be contributed to the upstream.
However, sometimes we have to make modification which should not be contributed.

In such cases:

1. Fork the repository to github.com/growaspeople
2. Make `master` as same as latest release
3. Commit changes you want to apply
    - Add [GGP] at the first of the commit message
4. When new version released, rebase `master`
