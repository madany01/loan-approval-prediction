module.exports = {
  env: {
    browser: true,
    es2021: true,
  },

  parserOptions: {
    ecmaVersion: 'latest',
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:prettier/recommended'],

  rules: {
    'no-console': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'no-underscore-dangle': ['off'],
    'no-return-assign': ['error', 'except-parens'],
    strict: 'off',
  },
}
