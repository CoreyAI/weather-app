const contentContainer = () => {
  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("id", "content-container");
  return contentContainer;
}

const weatherContainer = () => {
  const weatherContainer = document.createElement("div");
  weatherContainer.setAttribute("id", "weather-container");

  weatherContainer.appendChild(bubbleTopRow());
  weatherContainer.appendChild(bubbleLeftColumn());
  weatherContainer.appendChild(bubbleRightColumn());

  return weatherContainer;
}

const bubbleTopRow = () => {
  const container = document.createElement("div");
  container.setAttribute("class", "bubble-item");
  container.setAttribute("id", "bubble-top-row");

  container.innerHTML = `Test`;

  return container;
}

const bubbleLeftColumn = () => {
  const container = document.createElement("div");
  container.setAttribute("class", "bubble-item");
  container.setAttribute("id", "bubble-left-column");
  return container;
}

const bubbleRightColumn = () => {
  const container = document.createElement("div");
  container.setAttribute("class", "bubble-item");
  container.setAttribute("id", "bubble-right-column");
  return container;
}

export { weatherContainer, contentContainer };