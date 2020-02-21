module.exports = {
  preset: 'react-native',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)'],
  setupFilesAfterEnv: ['./scripts/jest-setup.ts'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
