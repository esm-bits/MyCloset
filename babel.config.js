module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    '@babel/plugin-proposal-numeric-separator',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/proposal-object-rest-spread',
    '@babel/plugin-transform-flow-strip-types',
  ],
};
