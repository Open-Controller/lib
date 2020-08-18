import { describe,it } from "mocha"
import { DelayAction } from "./DelayAction"
import { expect } from "chai"
import { jsonTest } from "../utils/jsonTest"
describe("DelayAction",()=>{
    describe("#run()",()=>{
        it("should delay",async ()=>{
            const action = new DelayAction(50,"test")
            const start = new Date().valueOf()
            await action.run()
            const end = new Date().valueOf()
            expect(end-start).to.be.approximately(50,10)
        })
    })
    jsonTest(DelayAction,[50,"test"])
})