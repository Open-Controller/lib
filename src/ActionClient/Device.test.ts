import { describe,it } from "mocha"
import { expect } from "chai"
import { Device } from "./Device"
import { DelayAction } from "../Action"
describe("Device",()=>{
    describe("#getAction()",()=>{
        it("should get the right action",async ()=>{
            const action = new DelayAction({name:"delay",time:50})
            const device = new Device({
                name:"test",
                actions:[
                    action
                ]
            })
            expect(device.getAction("delay")).to.equal(action)
        })
    })
    describe("#run()",()=>{
        it("should run the action",async ()=>{
            const action = new DelayAction({name:"delay",time:50})
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