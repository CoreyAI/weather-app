import { pageLoad } from "../dist/page-load";
import * as Content from "../dist/content";
import "./style.css";

pageLoad.appendElement(Content.contentContainer());
const contentContainer = document.getElementById("content-container");

pageLoad.appendElementIntoContainer(Content.weatherTemplate(), contentContainer);
