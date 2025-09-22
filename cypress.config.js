const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const createBundler = require("@badeball/cypress-cucumber-preprocessor/webpack");
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.tesco.com/",
    specPattern: "cypress/e2e/features/*.feature",
    supportFile: false,
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        webpack({
          webpackOptions: {
            resolve: {
              extensions: [".ts", ".js"],
            },
            module: {
              rules: [
                {
                  test: /\.feature$/,
                  use: [
                    {
                      loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                    },
                  ],
                },
              ],
            },
          },
        })
      );

      return config;
    },
  },
});
