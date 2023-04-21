import { pageLoad } from "../dist/page-load";
import * as Content from "../dist/content";
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
  // Content.setSearchClickFlag();
  // console.log(Content.getSearchClickFlag());

  locationName = locationElement.innerText;

  Content.displayLocationOrSearch(locationBar);

});


let form = document.getElementById("search-bar");
form.addEventListener("reset", function() {
  console.log("reset button pressed");
});
form.addEventListener("submit", function(e) {
  e.preventDefault();
  console.log("submit button pressed");
});