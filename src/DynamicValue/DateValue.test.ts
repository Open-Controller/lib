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
                done()
            })
            after(()=>unsubscribe())
        })
    })
})