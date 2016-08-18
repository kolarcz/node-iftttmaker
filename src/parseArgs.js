export default function parseArgs(...args) {
  let event = null;
  let values = {};
  let callback = () => {};

  if (typeof args[args.length - 1] === 'function') {
    callback = args.pop();
  }

  if (typeof args[0] === 'object') {
    event = args[0].event;

    if (typeof args[0].values === 'object') {
      values = {
        value1: args[0].values.value1,
        value2: args[0].values.value2,
        value3: args[0].values.value3
      };
    }
  } else {
    event = args[0];
    values = {
      value1: args[1],
      value2: args[2],
      value3: args[3],
    };
  }

  return {
    event,
    values,
    callback
  };
}
