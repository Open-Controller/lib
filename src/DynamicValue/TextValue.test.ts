import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { expect } from "chai"
import { TextValue } from "./TextValue"
describe("TextValue",()=>{
    jsonTest(TextValue,["test"])
    describe("#onValue()",()=>{
        it("should send the string",(done)=>{
            const unsubscribe = new TextValue("test").onValue((text)=>{
                expect(text).to.equal("test")
                done()
            })
            after(()=>unsubscribe())
        })
    })
    describe("#getValue()",()=>{
        it("should return the string",()=>{
            expect(new TextValue("test").getValue()).to.equal("test")
        })
    })
})