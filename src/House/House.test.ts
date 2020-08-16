import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { Blank } from "../Controller/Widget"
import { House } from "./House"
import { Room } from "../Room"
import { Controller } from "../Controller"
describe("House",()=>{
    jsonTest(House,[{name:"test",rooms:[
        new Room({name:"test",controllers:[
            new Controller({name:"test",layout:[new Blank()]})
        ]})
    ]}])
})