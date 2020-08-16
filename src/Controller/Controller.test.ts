import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { Blank } from "./Widget/Blank"
import { Controller } from "./Controller"
describe("Controller",()=>{
    jsonTest(Controller,[{name:"test",layout:[new Blank()]}])
})