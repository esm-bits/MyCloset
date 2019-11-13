module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '^@src/(.+)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./scripts/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
