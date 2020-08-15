import { describe } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { Blank } from "./Blank"
describe("Blank",()=>{
    jsonTest(Blank,[])
})