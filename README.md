<p align="center">
<a href="https://shopify.com/" target="blank"><img src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-main-8ee1e0052baf87fd9698ceff7cbc01cc36a89170212ad227db3ff2706e89fd04.svg" width="320" alt="Shopify Logo" /></a>
<a href="https://firebase.google.com/" target="blank"><img src="https://firebase.google.com/images/brand-guidelines/logo-built_white.png" width="320" alt="Firebase Logo" /></a>
</p>

## Description

Starter App for Handling [Shopify Webhooks](https://github.com/nestjs/nest) with Serverless Firebase Functions.

## Shopify Webhook Configuration

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
$ cd functions && npm run functions
```

## Deploy

```bash
$ firebase deploy
```

## List of Shopify Webhook Events

- Cart creation: a webhook will be sent every time a cart is created.
- Cart update: a webhook will be sent every time a cart is updated.
- Checkout creation: a webhook will be sent every time a checkout is created.
- Checkout deletion: a webhook will be sent every time a checkout is deleted.
- Checkout update: a webhook will be sent every time a checkout is updated.
- Collection creation: a webhook will be sent every time a collection is created.
- Collection deletion: a webhook will be sent every time a collection is deleted.
- Collection update: a webhook will be sent every time a collection is updated.
- Customer group creation: a webhook will be sent every time a customer group is created.
- Customer group deletion: a webhook will be sent every time a customer group is deleted.
- Customer group update: a webhook will be sent every time a customer group is updated.
- Customer creation: a webhook will be sent every time a new customer is created.
- Customer deletion: a webhook will be sent every time a customer record is deleted.
- Customer disable: a webhook will be sent every time a customer account is disabled.
- Customer enable: a webhook will be sent every time a customer account is enabled.
- Customer update: a webhook will be sent every time a customer record is updated.
- Draft order creation: a webhook will be sent every time a draft order is created.
- Draft order deletion: a webhook will be sent every time a draft order is deleted.
- Draft order update: a webhook will be sent every time a draft order has been updated.
- Fulfillment creation: a webhook will be sent every time a fulfillment is created on an order.
- Fulfillment update: a webhook will be sent every time fulfillment is updated on an order.
- Order cancellation: a webhook will be sent every time an order is canceled.
- Order creation: a webhook will be sent every time an order is created.
- Order deletion: a webhook will be sent every time an order is deleted.
- Order fulfillment: a webhook will be sent every time an order is fulfilled.
- Order payment: a webhook will be sent every time an order has been paid.
- Order update: a webhook will be sent every time an order has been updated.
- Product creation: a webhook will be sent every time a product has been created.
- Product deletion: a webhook will be sent every time a product has been deleted.
- Product update: a webhook will be sent every time a product has been updated.
- Refund create: a webhook will be sent every time a refund is issued.
- Shop update: a webhook will be sent every time a shop property is updated.
- Theme creation: a webhook will be sent every time a theme is created.
- Theme deletion: a webhook will be sent every time a theme is deleted.
- Theme update: a webhook will be sent every time a theme property is updated.
