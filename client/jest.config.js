const nextJest = require("next/jest");
const createJestConfig = nextJest({ dir: './' })
const customJestConfig = {
  testPathIgnorePatters: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/src'],
  testEnviroment: 'jsdom',
}
module.exports = createJestConfig(customJestConfig)
