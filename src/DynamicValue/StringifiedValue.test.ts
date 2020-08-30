import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { StringifiedValue } from "./StringifiedValue"
import { expect } from "chai"
import { NumberValue } from "./NumberValue"
describe("StringifiedValue",()=>{
    jsonTest(StringifiedValue,[new NumberValue(1)])
    describe("#onValue()",()=>{
        it("should send the json stringified",(done)=>{
            const unsubscribe = new StringifiedValue(new NumberValue(1)).onValue(stringified=>{
                expect(stringified).to.equal("1")
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the the json stringified version",async()=>{
            expect(await new StringifiedValue(new NumberValue(1)).getValue())
                .to.equal("1")
        })
    })
})