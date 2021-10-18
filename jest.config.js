module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setup-jest.ts"],
  testPathIgnorePatterns: ["./node_modules/", "./dist/", "./cypress/"],
  transformIgnorePatterns: ["node_modules/(?!(ol)/)"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.spec.json",
      stringifyContentPathRegex: "\\.html$",
      diagnostics: {
        ignoreCodes: ["TS151001"],
      },
    },
  },
};
