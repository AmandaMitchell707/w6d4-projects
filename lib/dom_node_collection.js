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

  append(content) {
    this.nodes.forEach( (node) => {
      if (content instanceof DOMNodeCollection) {
        content.nodes.forEach((el) => {
          node.innerHTML += el.outerHTML;
        });
      } else {
        node.innerHTML += content;
      }
    });
  }

  attr(attribute, value) {
    this.nodes.forEach( (node) => {
      node.setAttribute(attribute, value);
    });
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

  children() {
    let children = new DOMNodeCollection([]);

    this.nodes.forEach( (el) => {
      let arr = Array.from(el.children);

      arr.forEach((child) => {
        children.nodes.push(child);
      });
    });

    return children;
  }



}

module.exports = DOMNodeCollection;
