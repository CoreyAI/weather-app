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
        placeholder="location" autocomplete="off"/>
        <button type="submit">Submit</button>
        <button type="reset">Reset</button>
    </label>
  `;

  return formContainer;
}

const locationDisplay = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "location");
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

const setLocation = (location, result) => {
  const locationElement = document.getElementById("location");
  if (!location) {
    return 'Choose Location';
  }

  locationElement.innerText = 
    `${result.location.name}, ${result.location.region}, ${result.location.country}.`;
  
  // TODO: Parse date text to remove time.
  const leftBubbleElement = document.getElementById("bubble-left-column");
  leftBubbleElement.innerHTML = `
    <div>${result.current.last_updated}</div>
    <div>Wind: ${result.current.gust_kph} km/h</div>
    <div>Precip: ${result.current.precip_mm} mm</div>
  `;

  const rightBubbleElement = document.getElementById("bubble-right-column");
  rightBubbleElement.innerHTML = `
    <div>${result.current.condition.text}</div>
    <div id="weather-icon-temp">
      <img src="${result.current.condition.icon}" alt="${result.current.condition.text}" />
      <div>${result.current.temp_c} &deg;C</div>
    </div>
  `;

}

export { weatherContainer, contentContainer, bubbleTopRow, bubbleLeftColumn, 
  bubbleRightColumn, getSearchClickFlag, setSearchClickFlag, 
  displayLocationOrSearch, setLocation };