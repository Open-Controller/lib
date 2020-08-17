import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { DynamicText } from "./DynamicText"
import {  TextValue } from "../../DynamicValue"
describe("DynamicText",()=>{
    jsonTest(DynamicText,[{text:new TextValue("test")}])
})