declare const APP_URL: string;
declare const REST_API_URL: string;
declare const LAMBDA_API_URL: string;
declare const SENTRY_DSN: string;

const NODE_ENV = process.env.NODE_ENV;
const manifestData = chrome.runtime.getManifest();

export const config = {
  URL: {
    APP_URL: APP_URL,
    REST_API_URL: REST_API_URL,
    LAMBDA_API_URL_FACEBOOK: `${LAMBDA_API_URL}/receive-extension-request`,
    LAMBDA_API_URL_INSTAGRAM: `${LAMBDA_API_URL}/receive-instagram-extension-request`
  },
  config: {
    sentry: {
      dsn: SENTRY_DSN,
      debug: true,
      environment: NODE_ENV,
      release: manifestData.version
    },
    facebook: {
      MAX_POST: 25
    },
    instagram: {
      MAX_POST: 25,
      MAX_FOLLOWERS: 500
    }
  }
};
