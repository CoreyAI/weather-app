import { pageLoad } from "../dist/page-load";

const test = ` 
  <div>test 123</div>
`

pageLoad.appendInnerHTML(test);