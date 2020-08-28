import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { SplitValue } from "./SplitValue"
import { expect } from "chai"
import { TextValue } from "./TextValue"
describe("SplitValue",()=>{
    jsonTest(SplitValue,[new TextValue("a,b"),","])
    describe("#onValue()",()=>{
        it("should send the split value",(done)=>{
            const unsubscribe = new SplitValue(new TextValue("a,b"),",").onValue((parsed)=>{
                expect(parsed).to.deep.equal(["a","b"])
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the split version",async()=>{
            expect(await new SplitValue(new TextValue("a,b"),",").getValue())
                .to.deep.equal(["a","b"])
        })
    })
})