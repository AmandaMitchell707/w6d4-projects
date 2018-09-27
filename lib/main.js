const DOMNodeCollection = require('./dom_node_collection.js');

window.$l = function(arg) {
  // debugger
  if (arg instanceof HTMLElement || typeof arg === "string") {
    // debugger
    const listEls = document.querySelectorAll(arg);
    const listArr = Array.from(listEls);
    return new DOMNodeCollection(listArr);
  } else {
    return new DOMNodeCollection(arg);
  }
};

window.$l = $l;
