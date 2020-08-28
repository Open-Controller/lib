import { describe } from "mocha"
import { jsonTest } from "../utils/jsonTest"
import { HttpValue } from "./HttpValue"
import { expect } from "chai"
describe("HttpValue",()=>{
    jsonTest(HttpValue,[{
        name:"test",
        method:"GET",
        base:"https://jsonplaceholder.typicode.com/",
        path:"todos",
        interval:2000
    }])
    describe("#onValue()",()=>{
        it("should send the date",(done)=>{
            const unsubscribe = new HttpValue({
                name:"test",
                method:"GET",
                base:"https://jsonplaceholder.typicode.com/",
                path:"todos/1",
                interval:400
            }).onValue((data)=>{
                expect(JSON.parse(data)).to.deep.equal({
                    "userId": 1,
                    "id": 1,
                    "title": "delectus aut autem",
                    "completed": false
                })
                unsubscribe()
                done()
            })
        })
    })
    describe("#getValue()",()=>{
        it("should return the date",async()=>{
            expect(JSON.parse(await new HttpValue({
                name:"test",
                method:"GET",
                base:"https://jsonplaceholder.typicode.com/",
                path:"todos/1",
                interval:2000
            }).getValue())).to.deep.equal({
                "userId": 1,
                "id": 1,
                "title": "delectus aut autem",
                "completed": false
            })
        })
    })
})