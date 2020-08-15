import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { Blank } from "./Blank"
import { GridLayout } from "./GridLayout"
describe("GridLayout",()=>{
    jsonTest(GridLayout,[{width:1,height:1},[
        new Blank()
    ]])
})