import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { ParsedValue } from "./ParsedValue"
import { expect } from "chai"
import { TextValue } from "./TextValue"
describe("ParsedValue",()=>{
    jsonTest(ParsedValue,[new TextValue("test")])
    describe("#onValue()",()=>{
        it("should send the json parse",(done)=>{
            const unsubscribe = new ParsedValue(new TextValue(JSON.stringify({t:"test"}))).onValue((parsed)=>{
                expect(parsed).to.deep.equal({t:"test"})
                done()
            })
            after(()=>unsubscribe())
        })
    })
})