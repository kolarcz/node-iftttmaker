import https from 'https';
import url from 'url';
import qs from 'querystring';
import HttpsProxyAgent from 'https-proxy-agent';
import parseArgs from './parseArgs';

class IFTTTMaker {

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  setProxy(proxy) {
    this.proxy = proxy;
  }

  send(...args) {
    const { event, values, callback } = parseArgs(...args);

    return new Promise((resolve, reject) => {
      let endpoint = 'https://maker.ifttt.com';
      endpoint += `/trigger/${qs.escape(event)}/with/key/${qs.escape(this.apiKey)}`;
      endpoint += `?${qs.stringify(values)}`;

      const options = url.parse(endpoint);

      if (this.proxy) {
        options.agent = new HttpsProxyAgent(this.proxy);
      }

      https.get(options, ({ statusCode }) => {
        if (!statusCode || statusCode !== 200) {
          const err = `Bad response code: ${statusCode}`;
          reject(err);
          callback(err);
        } else {
          resolve();
          callback(false);
        }
      }).on('error', (err) => {
        reject(err);
        callback(err);
      });
    });
  }

}

module.exports = (apiKey) => new IFTTTMaker(apiKey);
