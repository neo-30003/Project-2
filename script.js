const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElem = function () {
  let element;
  if (this.selector.startsWith(".")) {
    element = document.createElement("div");
    element.classList.add(this.selector);
    document.body.append(element);
  } else if (this.selector.startsWith("#")) {
    element = document.createElement("p");
    element.setAttribute("id", this.selector);
    document.body.append(element);
  }
  element.style.cssText = `height: ${this.height}px;
  width: ${this.width}px;
  background: ${this.bg};
  font-size: ${this.fontSize}px;`;
  element.textContent = "Какой-нибудь текст";
};

const newElem1 = new DomElement(".block", "100", "200", "green", "25");
const newElem2 = new DomElement("#best", "100", "200", "red", "25");

newElem1.createElem();
newElem2.createElem();
