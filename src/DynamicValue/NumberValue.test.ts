import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { expect } from "chai"
import { NumberValue } from "./NumberValue"
describe("NumberValue",()=>{
    jsonTest(NumberValue,[1])
    describe("#onValue()",()=>{
        it("should send the number",(done)=>{
            const unsubscribe = new NumberValue(1).onValue((number)=>{
                expect(number).to.equal(1)
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()", ()=>{
        it("should return the number",async ()=>{
            expect(await new NumberValue(1).getValue()).to.equal(1)
        })
    })
})