let searchClickFlag = false;

const getSearchClickFlag = () => {
  return searchClickFlag;
}

const setSearchClickFlag = () => {
  if (searchClickFlag == false) {
    searchClickFlag = true;
  } else {
    searchClickFlag = false;
  }
}

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

  displayLocationOrSearch(container);
  
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

const locationSearch = () => {
  const formContainer = document.createElement("form");
  formContainer.setAttribute("action", "#");
  formContainer.setAttribute("id", "search-bar");

  formContainer.innerHTML = `
    <label htmlFor="search">
      <input type="text" name="search-location" id="search-location" 
        placeholder="location"/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </label>
  `;

  return formContainer;
}

const locationDisplay = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "location");
  
  // TODO: City name must be obtained from input/API.
  container.innerHTML = `Windsor`;
  return container;
}

const displayLocationOrSearch = (container) => {
  if (searchClickFlag == false) {
    container.appendChild(locationDisplay());
  } else {
    container.appendChild(locationSearch());
  }
}

const clearContainer = (container) => {

}

export { weatherContainer, contentContainer, bubbleTopRow, bubbleLeftColumn, 
  bubbleRightColumn, getSearchClickFlag, setSearchClickFlag, 
  displayLocationOrSearch };