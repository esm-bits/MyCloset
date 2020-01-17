module.exports = {
  root: true,
  ignorePatterns: ['node_modules/', 'android/', 'ios/'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'warn',
    '@typescript-eslint/ban-ts-ignore': 'warn',
    'react-native/no-inline-styles': 'warn',
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@react-native-community',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'prettier/@typescript-eslint',
  ],
};
