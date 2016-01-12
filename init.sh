#!/bin/bash

set -eu

PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )" # coding-standards project root

cd "$PROJECT_ROOT/../../" # cd to root of the project which calls coding-standards as its NPM module

# Create .eslintrc if not exists
[ ! -f .eslintrc ] && echo '{ "extends": "./node_modules/coding-standards/javascript/nodejs.eslintrc.json" }' > .eslintrc

# Create .editorconfig
"$PROJECT_ROOT/node_modules/.bin/eslint-to-editorconfig" root=false > /dev/null
EDITOR_CONFIG_JS=$(cat .editorconfig)
EDITOR_CONFIG_OTHERS=$(cat "$PROJECT_ROOT/general/.editorconfig")

rm .editorconfig

echo -e "$EDITOR_CONFIG_OTHERS\n\n$EDITOR_CONFIG_JS" > .editorconfig
