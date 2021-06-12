module.exports = {
  transform: {
    '\\.(js|jsx)?$': 'babel-jest',
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-transform-css',
  },
  transformIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/', '/public/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect', 'babel-polyfill'], // setupFiles before the tests are ran
  testEnvironment: 'jsdom',
};
