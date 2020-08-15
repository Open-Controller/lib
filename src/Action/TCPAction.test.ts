import { describe,it } from "mocha"
import { expect } from "chai"
import { jsonTest } from "../utils/jsonTest"
import { TCPAction } from "./TCPAction"
describe("TCPAction",()=>{
    describe("#run()",()=>{
        it("should fetch",async ()=>{
            const action = new TCPAction({
                name:"test",
                host:"1.1.1.1",
                port:80,
                command:"x"
            })
            const {successful} = await action.run()
            expect(successful).to.equal(true)
        })
    })
    jsonTest(TCPAction,[{
        name:"test",
        host:"1.1.1.1",
        port:80,
        command:"x"
    }])
})