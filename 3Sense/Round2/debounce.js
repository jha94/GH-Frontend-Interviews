function debouce(callback, delay = 1000) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
     return callback.call(this, ...args);
    }, delay);
  };
}

function debouce(callback, delay = 1000) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
     return callback.apply(this, [...args]);
    }, delay);
  };
}

function debouce(callback, delay = 1000) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      return callback.bind(this, ...args)();
    }, delay);
  };
}