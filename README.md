# iftttmaker
Sending requests to IFTTT Maker channel with `node.js`

## Instalation
`npm install iftttmaker`

## Methods

### require('iftttmaker')(*apiKey*)
Creates an instance of the IFTTTMaker with IFTTT Maker *apiKey*.

### IFTTTMaker.send(*event* [, *value1* [, *value2* [, *value3*]]] [, *callback(error)*])
Sends a request with specified *event* and values *value1*, *value2* and *value3* and return Promise. You can also use *callback*.

### IFTTTMaker.send({ event: *event*, values: { value1: *value1*, ... *value3* }} [, *callback(error)*])
Another option with params as object.


## Examples
```javascript
var apiKey = 'VJWqWLSLX3gfbvhR1bmYfi';
var IFTTTMaker = require('iftttmaker')(apiKey);

IFTTTMaker.send('notify', 'hello', 'world').then(function () {
  console.log('Request was sent');
}).catch(function (error) {
  console.log('The request could not be sent:', error);
});
```

```javascript
var apiKey = 'VJWqWLSLX3gfbvhR1bmYfi';
var IFTTTMaker = require('iftttmaker')(apiKey);

var request = {
  event: 'notify',
  values: {
    value1: 'hello',
    value2: 'world'
  }
};

IFTTTMaker.send(request, function (error) {
  if (error) {
    console.log('The request could not be sent:', error);
  } else {
    console.log('Request was sent');
  }
});
```
