import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { Blank } from "../Controller/Widget"
import { Room } from "./Room"
import { Controller } from "../Controller"
describe("Room",()=>{
    jsonTest(Room,[{name:"test",controllers:[
        new Controller({name:"test",layout:[new Blank()]})
    ]}])
})