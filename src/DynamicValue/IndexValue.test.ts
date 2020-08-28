import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { SplitValue } from "./SplitValue"
import { IndexValue } from "./IndexValue"
import { expect } from "chai"
import { TextValue } from "./TextValue"
describe("IndexValue",()=>{
    jsonTest(IndexValue,[new SplitValue(new TextValue("a,b"),","),0])
    describe("#onValue()",()=>{
        it("should send the item at the index",(done)=>{
            const unsubscribe = new IndexValue(new SplitValue(new TextValue("a,b"),","),0).onValue((parsed)=>{
                expect(parsed).to.equal("a")
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the item at the index",async()=>{
            expect(await new IndexValue(new SplitValue(new TextValue("a,b"),","),0).getValue())
                .to.equal("a")
        })
    })
})