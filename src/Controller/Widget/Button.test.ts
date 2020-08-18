import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { Button } from "./Button"
import { DelayAction } from "../../Action"
describe("Button",()=>{
    jsonTest(Button,[{action:new DelayAction(50,"delay"),icon:"test"}])
})