import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { ToggleButton } from "./ToggleButton"
import { DelayAction } from "../../Action"
import { ParsedValue, TextValue } from "../../DynamicValue"
describe("ToggleButton",()=>{
    jsonTest(ToggleButton,[{action:new DelayAction(50,"delay"),state:new ParsedValue<boolean>(new TextValue("true")),icon:"test"}])
})