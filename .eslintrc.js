module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        /*"eslint:recommended",
        "plugin:@typescript-eslint/recommended"*/
        "airbnb-typescript/base"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module",
        project: './tsconfig.json',
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
};
