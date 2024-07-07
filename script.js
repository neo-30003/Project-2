document.addEventListener("DOMContentLoaded", function (event) {
  const px = 10;
  const DomElement = function (
    selector = ".default-selector",
    height = "100px",
    width = "100px",
    bg = "green",
    fontSize = "16px"
  ) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.cssText = "";
  };

  DomElement.prototype.newElem = function () {
    let elem;
    elem = document.createElement("div");
    if (this.selector[0] === ".") {
      elem = document.createElement("div");
      elem.className = this.selector.slice(1);
    }
    elem.style.cssText = `height: ${this.height};
    width: ${this.width};
    background: ${this.bg};
    font-size: ${this.fontSize};`;

    elem.style.cssText += `left: ${Math.round(
      window.innerWidth / 2 - parseInt(this.width) / 2
    )}px; `;
    elem.style.cssText += `top: ${Math.round(
      window.innerHeight / 2 - parseInt(this.height) / 2
    )}px; `;
    elem.style.cssText += `position: absolute;`;
    elem.addEventListener("click", this.transfer);
    return elem;
  };

  const square = new DomElement();
  document.body.appendChild(square.newElem());
  document.addEventListener("keydown", (event) => {
    const div = document.querySelector("div");
    if (event.key === "ArrowUp") {
      div.style.top = parseInt(div.style.top) - px + "px";
    }
    if (event.key === "ArrowRight") {
      div.style.left = parseInt(div.style.left) + px + "px";
    }
    if (event.key === "ArrowLeft") {
      div.style.left = parseInt(div.style.left) - px + "px";
    }
    if (event.key === "ArrowDown") {
      div.style.top = parseInt(div.style.top) + px + "px";
    }
  });
});
