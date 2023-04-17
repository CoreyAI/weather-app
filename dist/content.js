const contentContainer = document.getElementById("content-container");

const resetContainer = contentContainer.innerHTML = "";

const weatherTemplate = () => {
  const weatherContainer = document.createElement("div");
  weatherContainer.setAttribute("class", "weather-container");

  // Test/TODO
  weatherContainer.innerHTML = 'Weather App Bubble';
  return weatherContainer;
}

const addElementToContentContainer= (e) => {
  contentContainer.appendChild(e);
}

addElementToContentContainer(weatherTemplate());