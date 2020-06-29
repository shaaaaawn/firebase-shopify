import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { environment } from './environments/environment';
import { ShopifyOrderWebhook } from './shopify-order-webhook';
import { GetShopifyOrders } from './shopify-get-orders';

const context = { admin, environment };
admin.initializeApp();

//shopify-order-webhook from Shopify New Order Webhook
exports.shopifyOrderWebhook = functions.https.onRequest(
  async (req: functions.Request, res: functions.Response) => {
    await ShopifyOrderWebhook(context, req, res);
  }
);

// shopify-get-orders from Shopify Admin
exports.getShopifyOrders = functions.https.onRequest(
  async (req: functions.Request, res: functions.Response) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'Content-Type');

    const orders = await GetShopifyOrders(context);
    res.status(200).send(orders);
  }
);
