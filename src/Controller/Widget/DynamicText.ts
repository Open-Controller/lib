import { Widget, WidgetConstructor } from "./Widget"
import { DynamicValue } from "../../DynamicValue"

export class DynamicText implements Widget {
    text:DynamicValue<string|number>
    key:string
    variant="DynamicText"
    constructor({text,key}:{text:DynamicValue<string|number>,key:string}){
        this.text = text
        this.key = key
    }
}

const check:WidgetConstructor<{text:DynamicValue<string|number>}> = DynamicText