import { environment } from './environments/environment';

export async function postToSlack(_msg: string) {
  const rp = require('request-promise');
  console.log('===Posting to Slack: ' + _msg);
  const message = _msg;
  return rp({
    method: 'POST',
    uri: environment.slack.webhook_url,
    body: {
      text: message,
      attachments: [],
    },
    json: true,
  });
}
