const contentContainer = () => {
  const contentContainer = document.createElement("div");
  contentContainer.setAttribute("id", "content-container");
  return contentContainer;
}

const weatherContainer = () => {
  const weatherContainer = document.createElement("div");
  weatherContainer.setAttribute("id", "weather-container");

  const bubbleTopRow = document.createElement("div");
  bubbleTopRow.setAttribute("class", "bubble-item");
  bubbleTopRow.setAttribute("id", "bubble-top-row");
  const bubbleLeftColumn = document.createElement("div");
  bubbleLeftColumn.setAttribute("class", "bubble-item");
  bubbleLeftColumn.setAttribute("id", "bubble-left-column");
  const bubbleRightColumn = document.createElement("div");
  bubbleRightColumn.setAttribute("class", "bubble-item");
  bubbleRightColumn.setAttribute("id", "bubble-right-column");

  weatherContainer.appendChild(bubbleTopRow);
  weatherContainer.appendChild(bubbleLeftColumn);
  weatherContainer.appendChild(bubbleRightColumn);

  return weatherContainer;
}

const bubbleTopRow = () => {
  const container = document.getElementById("bubble-top-row");

}

export { weatherContainer, contentContainer };