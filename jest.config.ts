import type { Config } from 'jest';
import nextJest from 'next/jest.js';
import type { JestConfigWithTsJest } from 'ts-jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  preset: 'ts-jest',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
};

export default createJestConfig(config);
