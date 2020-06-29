<p align="center">
<a href="https://shopify.com/" target="blank"><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-main-8ee1e0052baf87fd9698ceff7cbc01cc36a89170212ad227db3ff2706e89fd04.svg" width="320" alt="Shopify Logo" /></a>
<a href="https://firebase.google.com/" target="blank"><img src="https://firebase.google.com/images/brand-guidelines/logo-built_white.png" width="320" alt="Firebase Logo" /></a>
</p>

## Description

Handle [Shopify Webhooks](https://github.com/nestjs/nest) with Serverless Firebase Functions.

## Shopify App Configuration

- Login to Shopify Store
- From your Shopify admin, go to Settings > Notifications.
- Scroll down to the Webhooks section. Click the Create webhook button. A new window should appear.
- From the first drop-down, select the "Order Creation" Event from the list.
- Input Wehbook URL Provided from Firebase.

## Installation

```bash
$ cd functions && npm install
```

## Running the functions

```bash
# development with watch
$ cd functions && npm run firebase
```

## Deploy
```bash
$ fireebase deploy
```
