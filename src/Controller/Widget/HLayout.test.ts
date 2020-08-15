import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { Blank } from "./Blank"
import { HLayout } from "./HLayout"
describe("HLayout",()=>{
    jsonTest(HLayout,[[new Blank()]])
})