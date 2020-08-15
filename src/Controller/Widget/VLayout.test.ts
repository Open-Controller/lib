import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { Blank } from "./Blank"
import { VLayout } from "./VLayout"
describe("VLayout",()=>{
    jsonTest(VLayout,[[new Blank()]])
})