class DOMNodeCollection {
  constructor(nodes) {
    this.nodes = nodes;
  }

  html(string) {
    if (string) {
      this.nodes.forEach( (el) => {
        el.innerHTML = string;
      });
    } else {
      return this.nodes[0].innerHTML;
    }
  }


  empty() {
    this.nodes.forEach( (el) => {
      el.innerHTML = '';
    });
  }

  append(randomThing) {
    let ele = document.createElement(randomThing)
    this.nodes.forEach( (node) => {

      node.appendChild(ele);
    });
  }

  attr(el){
    return el[0].attributes;
  }

  addClass(className) {
    this.nodes.forEach( (el) => {
      el.classList.add(className);
    });
  }

  removeClass(className) {
    this.nodes.forEach( (el) => {
      el.classList.remove(className);
    });
  }
}

module.exports = DOMNodeCollection;
