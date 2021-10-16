module.exports = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["./setup-jest.ts"],
  testPathIgnorePatterns: ["./node_modules/", "./dist/", "./cypress/"],
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
