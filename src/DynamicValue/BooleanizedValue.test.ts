import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { BooleanizedValue } from "./BooleanizedValue"
import { expect } from "chai"
import { TextValue } from "./TextValue"
describe("BooleanizedValue",()=>{
    jsonTest(BooleanizedValue,[new TextValue("")])
    describe("#onValue()",()=>{
        it("should send the truthiness of the input",(done)=>{
            const unsubscribe = new BooleanizedValue(new TextValue("")).onValue(value=>{
                expect(value).to.equal(false)
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the the truthiness of the input",async()=>{
            expect(await new BooleanizedValue(new TextValue("")).getValue())
                .to.equal(false)
        })
    })
})