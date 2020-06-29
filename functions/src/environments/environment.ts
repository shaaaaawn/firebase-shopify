import { config } from 'dotenv';
config();

export const environment = {
  production: true,
  firebase: {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DB_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
  },
  shopify: {
    secret: process.env.SHOPIFY_SECRET,
    host: process.env.SHOPIFY_HOST,
    key: process.env.SHOPIFY_KEY,
  },
  slack: {
    webhook_url: process.env.SLACK_WEBHOOK_URL,
  },
};

console.log(environment);
