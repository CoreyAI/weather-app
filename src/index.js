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
  console.log("location has been clicked!");
  Content.setSearchClickFlag();
  console.log(Content.getSearchClickFlag())

  locationName = locationElement.innerText;

  Content.displayLocationOrSearch(locationBar);


});

//TODO: Possibly create async/await for search field generated from clicking
//      on location name in order to allow for another event listener to 
//      register form buttons.