import {defineConfig} from 'cypress'
import createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
import {addCucumberPreprocessorPlugin, afterRunHandler} from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
import {writeFileSync} from "fs";


const setupNodeEvents = async (on, config) => {
    await addCucumberPreprocessorPlugin(on, config, {
        omitAfterRunHandler: true
    })

    on(
        'file:preprocessor',
        createBundler({
            plugins: [createEsbuildPlugin.default(config)]
        })
    )

    on('after:run', async (results: { browserName: any; browserVersion: any; osName: any; osVersion: any; config: { resolvedNodeVersion: any; }; cypressVersion: any; startedTestsAt: any; endedTestsAt: any; }) => {
        if (results) {
            await afterRunHandler(config)
            writeFileSync(
                'cypress/reports/results.json',
                JSON.stringify(
                    {
                        browserName: results.browserName,
                        browserVersion: results.browserVersion,
                        osName: results.osName,
                        osVersion: results.osVersion,
                        nodeVersion: results.config.resolvedNodeVersion,
                        cypressVersion: results.cypressVersion,
                        startedTestsAt: results.startedTestsAt,
                        endedTestsAt: results.endedTestsAt
                    },
                    null,
                    '\t'
                )
            )
        }
    })
    // Make sure to return the config object as it might have been modified by the plugin.
    return config
}

export default defineConfig({
    e2e: {
        setupNodeEvents,
        specPattern: 'cypress/e2e/features/*.feature',
        baseUrl: 'https://www.saucedemo.com',
        includeShadowDom: true,
        chromeWebSecurity: false
    }
})

