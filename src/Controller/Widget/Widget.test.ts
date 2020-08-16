import { describe,it } from "mocha"
import { Widget } from "./Widget"
import { expect } from "chai"
import { ArrowLayout } from "./ArrowLayout"
import { Blank } from "./Blank"
import { Button } from "./Button"
import { DelayAction } from "../../Action"
import { DynamicText } from "./DynamicText"
import { TextValue } from "../../DynamicValue"
import { GridLayout } from "./GridLayout"
import { HLayout } from "./HLayout"
import { VLayout } from "./VLayout"
describe("Widget",()=>{
    describe("#fromJSON()",()=>{
        it("should return the correct class",()=>{
            const run = (instance:Widget)=>{
                expect(Widget.fromJSON(JSON.parse(JSON.stringify(instance)))).to.deep.equal(instance)
            }
            run(new ArrowLayout({
                left:new Blank(),
                right:new Blank(),
                center:new Blank(),
                top:new Blank(),
                bottom:new Blank(),
            }))
            run(new Blank())
            run(new Button({action:new DelayAction({name:"delay",time:50}),icon:"test"}))
            run(new DynamicText({text:new TextValue("test"),key:"test"}))
            run(new GridLayout({width:1,height:1},[
                new Blank()
            ]))
            run(new HLayout([new Blank()]))
            run(new VLayout([new Blank()]))
        })
    })
})