# node-iftttmaker
Sending requests to IFTTT Maker channel by `node.js`

## Instalation
`npm install node-iftttmaker`

## Methods

### IFTTTMaker.__construct(*apiKey*)
Creates an instance of the IFTTTMaker with IFTTT Maker *apiKey*

### IFTTTMaker.send(*action* [, *value1* [, *value2* [, *value3*]]] [, *callback(error)*])
Sends a request with specified *action* and values *value1*, *value2* and *value3* then return to *callback*

## Example
```javascript
var nodeIFTTTMaker = require('node-iftttmaker');

var apiKey = 'VJWqWLSLX3gfbvhR1bmYfi';
var action = 'notify';
var IFTTTMaker = new nodeIFTTTMaker(apiKey);

IFTTTMaker.send(action, 'hello', 'world', function (error) {
  if (error) {
    console.log('The request could not be sent:', error);
  } else {
    console.log('Request was sent');
  }
});
```
