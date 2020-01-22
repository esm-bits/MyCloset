module.exports = {
  plugins: ['detox', 'jest'],

  env: {
    'detox/detox': true,
    "jest/globals": true,
    'node': true
  },

  globals: {
    server: false,
  },

  rules: {
    'jest/no-jasmine-globals': 'off',
  },
};
