import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { DynamicText } from "./DynamicText"
import {  TextValue } from "../../DynamicValue"
describe("DynamicText",()=>{
    let text:TextValue = new TextValue("test")
    jsonTest(DynamicText,[{text,key:"test"}])
    after(()=>{
        text.destroy()
    })
})