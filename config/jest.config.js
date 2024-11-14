module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    'app/**/*.ts',
    'app/**/*.tsx',
    '!app/**/*.test.{js,jsx}',
    '!app/*/RbGenerated*/*.{js,jsx}',
    '!app/app.js',
    '!app/*/*/Loadable.{js,jsx}'
  ],
  coverageThreshold: {
    global: {
      statements: 6,
      branches: 0,
      functions: 10,
      lines: 5
    }
  },
  coverageReporters: ['json', 'lcov', 'text-summary'],
  moduleDirectories: ['node_modules', 'app'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  moduleNameMapper: {
    '.*\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/config/jest-mocks/image.js'
  },
  setupTestFrameworkScriptFile: '<rootDir>/config/test-setup.js',
  testRegex: 'tests/.*\\.test\\.js$',
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform',
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
};
