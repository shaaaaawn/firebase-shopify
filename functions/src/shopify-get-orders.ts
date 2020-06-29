import { environment } from './environments/environment';

export async function GetShopifyOrders(context: any) {
  try {
    console.log('===GET ORDERS STARTING ===');
    const rp = require('request-promise');
    const auth =
      'Basic ' +
      new Buffer(
        environment.shopify.key + ':' + environment.shopify.secret
      ).toString('base64');

    const options = {
      uri: `${environment.shopify.host}/admin/orders.json`,
      headers: {
        'User-Agent': 'Request-Promise',
        Authorization: auth,
      },
      json: true,
    };

    return await rp(options)
      .then((response: any) => {
        return response;
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  } catch (err) {
    throw new Error(err);
  }
}
