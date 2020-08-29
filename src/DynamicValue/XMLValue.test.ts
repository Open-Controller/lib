import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { XMLValue } from "./XMLValue"
import { expect } from "chai"
import { TextValue } from "./TextValue"
describe("XMLValue",()=>{
    jsonTest(XMLValue,[new TextValue("<root>test</root>")])
    describe("#onValue()",()=>{
        it("should send the item at the index",(done)=>{
            const unsubscribe = new XMLValue(new TextValue("<root>test</root>")).onValue((parsed)=>{
                expect(parsed).to.deep.equal({root:"test"})
                setImmediate(()=>unsubscribe())
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the item at the index",async()=>{
            expect(await new XMLValue(new TextValue("<root>test</root>")).getValue())
                .to.deep.equal({root:"test"})
        })
    })
})