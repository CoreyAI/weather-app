const pageLoad = (() => {

  const container = document.getElementById("container");
  
  const background = (link) => {
    const background = document.createElement("img");
    background.setAttribute("src", link)
    container.appendChild(background);
  }

  const appendElement = (element) => {
    container.appendChild(element);
  }

  const appendInnerHTML = (string) => {
    container.innerHTML += string;
  }

  const clearContent = (node) => {
    if (node) {
      node[0].innerHTML = '';
    } else {
      for (let i = 0; i <= container.childNodes.length; i++) {
        container.childNodes[0].remove();
      }
    }
  }

  return {background, appendElement, appendInnerHTML, clearContent};

})();

export {pageLoad};