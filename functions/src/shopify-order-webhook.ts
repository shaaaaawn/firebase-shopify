export async function ShopifyOrderWebhook(context: any, req: any, res: any) {
  const db = context.admin.firestore();

  try {
    await processWebhook();
    await storeOrder();
    res.status(200).send('Webhook Processed');
  } catch (err) {
    throw new Error('Webhook Fail:' + err);
  }

  //Process Incoming Shopify Webhook
  async function processWebhook() {
    console.log('=======NEW WEBHOOK========');
    const orderId = req.get('X-Shopify-Order-id');
    if (!orderId) {
      throw new Error('===Headers - No x-shopify-order-id');
    }

    //Verify Webhook Valid
    // const hmac = req.get("x-shopify-hmac-sha256");

    //Store Webhook In Temp Storage To Avoid Duplicates
    const webhooksRef = await db.collection('webhooks');
    const webhooksQuery = await webhooksRef
      .where('orderId', '==', orderId)
      .limit(3000)
      .get();

    if (webhooksQuery.empty) {
      //Store Webhook
      await db.collection('webhooks').doc(orderId).set({
        orderId: orderId,
        created_date: new Date(),
      });
    } else {
      res.end('Duplicate Webhook');
      throw Error;
    }
  }

  //Store Shopify Order Line Items In Firebase Firestore
  async function storeOrder() {
    const body = req.body;
    try {
      console.log('===Store Shopify Order ' + body.order_number);
      const line_items = body.line_items;
      if (!line_items) {
        throw new Error('===No Line Items');
      }

      //Determine Custom Line Items in Order
      for (const line_item of line_items) {
        const data = {
          order_date: body.created_at || '',
          order_number: body.order_number || '',
          order_notes: body.note || '',
          order_status_url: body.order_status_url || '',
          email: body.email || '',
          name: body.shipping_address.name || '',
          address1: body.shipping_address.address1 || '',
          address2: body.shipping_address.address2 || '',
          city: body.shipping_address.city || '',
          zip: body.shipping_address.zip || '',
          province: body.shipping_address.province || '',
          province_code: body.shipping_address.province_code || '',
          country: body.shipping_address.country || '',
          phone: body.shipping_address.phone || '',
          tags: body.tags || '',
          notes: body.note || '',
          product: line_item,
        };
        const doc = await db.collection('orders').doc();
        await db.collection('orders').doc(doc.id).set(data);
      }
      return;
    } catch (err) {
      throw new Error(err);
    }
  }
}
