import { describe,it } from "mocha"
import { jsonTest } from "../../utils/jsonTest"
import { ArrowLayout } from "./ArrowLayout"
import { Blank } from "./Blank"
describe("ArrowLayout",()=>{
    jsonTest(ArrowLayout,[{
        left:new Blank(),
        right:new Blank(),
        center:new Blank(),
        top:new Blank(),
        bottom:new Blank(),
    }])
})