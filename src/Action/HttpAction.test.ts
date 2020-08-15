import { describe,it } from "mocha"
import { expect } from "chai"
import { jsonTest } from "../utils/jsonTest"
import { HttpAction } from "./HttpAction"
describe("HttpAction",()=>{
    describe("#run()",()=>{
        it("should fetch",async ()=>{
            const action = new HttpAction({
                name:"test",
                method:"GET",
                base:"https://jsonplaceholder.typicode.com/",
                path:"todos"
            })
            const {successful} = await action.run()
            expect(successful).to.equal(true)
        })
    })
    jsonTest(HttpAction,[{
        name:"test",
        method:"GET",
        base:"https://jsonplaceholder.typicode.com/",
        path:"todos"
    }])
})