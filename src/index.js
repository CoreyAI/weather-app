import { pageLoad } from "../dist/page-load";
import "./style.css";

const test = ` 
  <div>test 123</div>
`

pageLoad.appendInnerHTML(test);