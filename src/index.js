import https from 'https';
import qs from 'querystring';
import parseArgs from './parseArgs';

class IFTTTMaker {

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  send(...args) {
    const { event, values, callback } = parseArgs(...args);

    return new Promise((resolve, reject) => {
      let url = 'https://maker.ifttt.com';
      url += `/trigger/${qs.escape(event)}/with/key/${qs.escape(this.apiKey)}`;
      url += `?${qs.stringify(values)}`;

      https.get(url, ({ statusCode }) => {
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
