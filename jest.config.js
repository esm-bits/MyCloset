module.exports = {
  preset: 'react-native',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)'],
  moduleNameMapper: {
    '^@src/(.+)': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./scripts/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
