import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { DateValue } from "./DateValue"
import { expect } from "chai"
describe("DateValue",()=>{
    jsonTest(DateValue,[])
    describe("#onValue()",()=>{
        it("should send the date",(done)=>{
            const unsubscribe = new DateValue().onValue((date)=>{
                expect(+date).to.approximately(new Date().valueOf(),100)
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the date",async()=>{
            expect(+await new DateValue().getValue()).to.approximately(new Date().valueOf(),100)
        })
    })
})