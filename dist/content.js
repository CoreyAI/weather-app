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

  container.appendChild(locationSearch());
  container.appendChild(locationDisplay());

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
  // container.innerHTML = `Windsor`;

  container.innerHTML = setLocation();

  return container;
}

const displayLocationOrSearch = (container) => {
  if (searchClickFlag == false) {
    container.querySelector("#search-bar").
      setAttribute("style", "display: none");
    container.querySelector("#location").
      removeAttribute("style", "display: none");
  } else {
    container.querySelector("#location").
      setAttribute("style", "display: none");
    container.querySelector("#search-bar").
      removeAttribute("style", "display: none");
  }
}

// Hacky solution for the initialization of this function in order to fulfill
// the Windsor placeholder. Look to modify once weather API has been
// incorporated.
const setLocation = (location) => {
  const locationElement = document.getElementById("location");
  if (!location) {
    return 'Windsor';
  }
  locationElement.innerText = location;
}

export { weatherContainer, contentContainer, bubbleTopRow, bubbleLeftColumn, 
  bubbleRightColumn, getSearchClickFlag, setSearchClickFlag, 
  displayLocationOrSearch, setLocation };