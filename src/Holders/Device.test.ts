import { describe,it } from "mocha"
import { expect } from "chai"
import { Device } from "./Device"
import { DelayAction } from "../Action"
import { TextValue } from "../DynamicValue"
describe("Device",()=>{
    describe("#getAction()",()=>{
        it("should get the right action",async ()=>{
            const action = new DelayAction(50,"delay")
            const dynamicValue = new TextValue("test","test")
            const device = new Device({
                name:"test",
                actions:[
                    action
                ],
                dynamicValues:[
                    dynamicValue
                ]
            })
            expect(device.getAction("delay")).to.equal(action)
            expect(device.getDynamicValue("test")).to.equal(dynamicValue)
        })
    })
    describe("#run()",()=>{
        it("should run the action",async ()=>{
            const action = new DelayAction(50,"delay")
            const device = new Device({
                name:"test",
                actions:[
                    action
                ]
            })
            const start = new Date().valueOf()
            await device.run("delay")
            const end = new Date().valueOf()
            expect(end-start).to.approximately(50,10)
        })
    })
})