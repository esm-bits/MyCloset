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
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: ['*.js'],
      env: {
        node: true,
      }
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-use-before-define': 'warn',
        '@typescript-eslint/ban-ts-ignore': 'warn',
        'react-native/no-inline-styles': 'off',
        '@typescript-eslint/no-use-before-define': 'off',
      },
      extends: [
        '@react-native-community',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'prettier/@typescript-eslint',
      ],
    }
  ]
};
