import { defineConfig } from "cypress";
const admin = require("firebase-admin");
const cypressFirebasePlugin = require("cypress-firebase").plugin;
require("dotenv").config();

const serviceAccount = process.env.NEXT_PUBLIC_SERVICE_ACCOUNT;
if (!serviceAccount) throw new Error('The $GOOGLE_CREDS environment variable was not found!');

const TEST_UID = process.env.NEXT_PUBLIC_TEST_UID;
if (!TEST_UID) throw new Error('The TEST_UID was not found!');

export default defineConfig({
  env: {
    TEST_UID: TEST_UID
  },
  e2e: {
    async setupNodeEvents(on, config) {
      cypressFirebasePlugin(on, config, admin, {
        credential: admin.credential.cert(JSON.parse(serviceAccount))
      });
    },
    baseUrl: 'http://localhost:3000',
    retries: {
      runMode: 3,
    },
    viewportHeight: 1080,
    viewportWidth: 1920,
    video: false,
    screenshotOnRunFailure: false
  },

  component: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
  },
});
