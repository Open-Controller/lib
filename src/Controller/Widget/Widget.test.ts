import { describe,it } from "mocha"
import { Widget, createWidget } from "./Widget"
import { expect } from "chai"
import { ArrowLayout } from "./ArrowLayout"
import { Blank } from "./Blank"
import { Button } from "./Button"
import { DelayAction } from "../../Action"
import { DynamicText } from "./DynamicText"
import { ParsedValue, TextValue } from "../../DynamicValue"
import { GridLayout } from "./GridLayout"
import { HLayout } from "./HLayout"
import { VLayout } from "./VLayout"
import { ToggleButton } from "./ToggleButton"
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
            run(new Button({action:new DelayAction(50,"delay"),icon:"test"}))
            run(new ToggleButton({action:new DelayAction(50,"delay"),state:new ParsedValue<boolean>(new TextValue("true")),icon:"test"}))
            run(new DynamicText({text:new TextValue("test")}))
            run(new GridLayout({width:1,height:1},[
                new Blank()
            ]))
            run(new HLayout([new Blank()]))
            run(new VLayout([new Blank()]))
            expect(Widget.fromJSON({__variant__:"NonExistent"})).to.deep.equal(null)
        })
    })
})

describe("createWidget()",()=>{
    it("should return the correct widget",()=>{
        expect(createWidget(GridLayout,{width:1,height:1},new Blank())).to.deep.equal(new GridLayout({width:1,height:1},[
            new Blank()
        ]))
        expect(createWidget(VLayout,undefined,new Blank())).to.deep.equal(new VLayout([new Blank()]))
        expect(createWidget(ArrowLayout,{
            left:new Blank(),
            right:new Blank(),
            center:new Blank(),
            top:new Blank(),
            bottom:new Blank(),
        })).to.deep.equal(new ArrowLayout({
            left:new Blank(),
            right:new Blank(),
            center:new Blank(),
            top:new Blank(),
            bottom:new Blank(),
        }))
        expect(createWidget(null)).to.equal(null)
    })
})