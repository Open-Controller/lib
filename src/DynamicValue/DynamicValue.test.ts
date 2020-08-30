import { describe,it } from "mocha"
import { DynamicValue } from "./DynamicValue"
import { expect } from "chai"
import { DateValue } from "./DateValue"
import { ParsedValue } from "./ParsedValue"
import { TextValue } from "./TextValue"
import { HttpValue } from "./HttpValue"
import { SplitValue } from "./SplitValue"
import { IndexValue } from "./IndexValue"
import { XMLValue } from "./XMLValue"
import { BooleanizedValue } from "./BooleanizedValue"
import { StringifiedValue } from "./StringifiedValue"
import { NumberValue } from "./NumberValue"

describe("DynamicValue",()=>{
    describe("#fromJSON()",()=>{
        it("should return the correct class",()=>{
            const run = <T>(instance:DynamicValue<T>)=>{
                expect(DynamicValue.fromJSON(JSON.parse(JSON.stringify(instance)))).to.deep.equal(instance)
            }
            run(new DateValue())
            run(new TextValue("test"))
            run(new NumberValue(1))
            run(new ParsedValue(new TextValue("test")))
            run(new BooleanizedValue(new TextValue("")))
            run(new StringifiedValue(new NumberValue(1)))
            run(new XMLValue(new TextValue("<root>test</root>")))
            run(new SplitValue(new TextValue("a,b"),","))
            run(new IndexValue(new SplitValue(new TextValue("a,b"),","),0))
            run(new HttpValue({
                name:"test",
                method:"GET",
                base:"https://jsonplaceholder.typicode.com/",
                path:"todos",
                interval:2000
            }))
        })
    })
})