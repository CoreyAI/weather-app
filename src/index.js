import { pageLoad } from "../dist/page-load";
import * as Content from "../dist/content";
import * as Weather from "../dist/weather-api";
import "./style.css";

const contentContainer = Content.contentContainer();
const weatherContainer = Content.weatherContainer();

pageLoad.appendElement(contentContainer);
contentContainer.appendChild(weatherContainer);

const locationBar = document.getElementById("bubble-top-row");
const locationElement = document.getElementById("location");
let locationName = '';
locationElement.addEventListener("click", function() {
  // console.log("location has been clicked!");
  Content.setSearchClickFlag();
  // console.log(Content.getSearchClickFlag());

  locationName = locationElement.innerText;

  Content.displayLocationOrSearch(locationBar);

});


let form = document.getElementById("search-bar");
let userInput = '';     // Consider not using this as global variable.
form.addEventListener("reset", function() {
  console.log("reset button pressed");
  Content.setSearchClickFlag();
  Content.displayLocationOrSearch(locationBar);
});
form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("submit button pressed");
  userInput = this.elements['search-location'].value;
  // TODO: Connect to weather API with userInput. Check docs for proper
  //       input sanitation.
  Content.setSearchClickFlag();
  Content.setLocation(userInput);
  Content.displayLocationOrSearch(locationBar);

  // Weather.setWeather(userInput).then(result => {
  //   weatherObject = result;
  //   console.log("result within then statement, ", weatherObject);
  // });

  let weatherObject = Weather.setWeather(userInput);
  // Add instructions within result to output results into the DOM.
  weatherObject.then(result => {
    console.log("success!");
  })
  console.log("out of then statement.");

});