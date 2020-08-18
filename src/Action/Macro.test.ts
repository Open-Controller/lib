import { describe,it } from "mocha"
import { expect } from "chai"
import { jsonTest } from "../utils/jsonTest"
import { Macro } from "./Macro"
import { DelayAction } from "./DelayAction"
describe("Macro",()=>{
    describe("#run()",()=>{
        it("should fetch",async ()=>{
            const start = new Date().valueOf()
            const action = new Macro([
                new DelayAction(50)
            ],"test")
            const {successful} = await action.run()
            const end = new Date().valueOf()
            expect(successful).to.equal(true)
            expect(end-start).to.approximately(50,10)
        })
    })
    jsonTest(Macro,[[
        new DelayAction(50)
    ],"test"])
})