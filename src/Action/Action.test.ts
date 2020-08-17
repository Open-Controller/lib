import { describe,it } from "mocha"
import { Action } from "./Action"
import { expect } from "chai"
import { HttpAction } from "./HttpAction"
import { Macro } from "./Macro"
import { DelayAction } from "./DelayAction"
import { TCPAction } from "./TCPAction"
describe("Action",()=>{
    describe("#fromJSON()",()=>{
        it("should return the correct class",()=>{
            const run = (instance:Action)=>{
                expect(Action.fromJSON(JSON.parse(JSON.stringify(instance)))).to.deep.equal(instance)
            }
            run(new HttpAction({
                name:"test",
                method:"GET",
                base:"https://jsonplaceholder.typicode.com/",
                path:"todos"
            }))
            run(new Macro({
                name:"test",
                actions:[
                    new DelayAction({name:"delay",time:50})
                ]
            }))
            run(new DelayAction({name:"delay",time:50}))
            run(new TCPAction({
                name:"test",
                host:"1.1.1.1",
                port:80,
                command:"x"
            }))
        })
    })
})